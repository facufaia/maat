// app/api/refunds/route.ts
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })
  
  // Check auth
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { payment_id, amount, reason } = await request.json()
    
    const { data, error } = await supabase
      .from('refunds')
      .insert([{
        payment_id,
        monto_reembolsado: amount,
        motivo: reason,
        fecha_reembolso: new Date().toISOString(),
        estado: 'pending'
      }])
      .select()

    if (error) throw error

    return NextResponse.json(data[0])
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function GET(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })
  const { searchParams } = new URL(request.url)
  const payment_id = searchParams.get('payment_id')

  try {
    const query = supabase.from('refunds').select('*')
    if (payment_id) {
      query.eq('payment_id', payment_id)
    }

    const { data, error } = await query
    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 }) 
  }
}