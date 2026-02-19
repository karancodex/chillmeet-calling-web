"use server";

import { redirect } from "next/navigation";

export async function createCashfreeOrder(amount: number, customerEmail: string, customerPhone: string) {
    const appId = process.env.CASHFREE_APP_ID;
    const secretKey = process.env.CASHFREE_SECRET_KEY;
    const mode = process.env.NEXT_PUBLIC_CASHFREE_MODE;

    // Validate credentials
    if (!appId || !secretKey) {
        throw new Error("Missing Cashfree keys in environment");
    }

    const baseUrl = mode === 'PRODUCTION'
        ? 'https://api.cashfree.com/pg/orders'
        : 'https://sandbox.cashfree.com/pg/orders';

    const orderId = `order_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    const payload = {
        order_id: orderId,
        order_amount: amount,
        order_currency: 'INR',
        customer_details: {
            customer_id: customerEmail.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 40) || 'guest_user',
            customer_email: customerEmail,
            customer_phone: customerPhone || '9999999999',
            customer_name: customerEmail.split('@')[0]
        },
        order_meta: {
            return_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/?payment=verify&order_id={order_id}`
        }
    };

    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-client-id': appId,
                'x-client-secret': secretKey,
                'x-api-version': '2023-08-01'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Cashfree Error:', data);
            throw new Error(data.message || 'Failed to create order');
        }

        return data;
    } catch (error: any) {
        console.error('Server Action Error:', error);
        throw new Error(error.message || 'Payment initiation failed');
    }
}

export async function verifyCashfreePayment(orderId: string) {
    const appId = process.env.CASHFREE_APP_ID;
    const secretKey = process.env.CASHFREE_SECRET_KEY;
    const mode = process.env.NEXT_PUBLIC_CASHFREE_MODE;

    const baseUrl = mode === 'PRODUCTION'
        ? 'https://api.cashfree.com/pg/orders'
        : 'https://sandbox.cashfree.com/pg/orders';

    try {
        const response = await fetch(`${baseUrl}/${orderId}`, {
            method: 'GET',
            headers: {
                'x-client-id': appId || '',
                'x-client-secret': secretKey || '',
                'x-api-version': '2023-08-01'
            }
        });

        const data = await response.json();
        return data.order_status === 'PAID';
    } catch (error) {
        console.error('Verify Payment Error:', error);
        return false;
    }
}
