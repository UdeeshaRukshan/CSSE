'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PaymentPortal() {
  const router = useRouter()
  const [cardholderName, setCardholderName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [discountCode, setDiscountCode] = useState('')

  const handlePayment = () => {
    router.push('/login/patients/login/new-appointment/success')
  }

  return (
    <div className="flex justify-between p-6 max-w-6xl mx-auto space-x-4">
      {/* Left Side */}
      <Card className="w-1/2 mr-4 bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Let's Make Payment</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-gray-600">
            To start your subscription, input your card details to make payment.
            You will be redirected to your bank's authorization page.
          </p>
          <div className="space-y-4">
            <div>
              <Label htmlFor="cardholderName">Cardholder's Name</Label>
              <Input
                id="cardholderName"
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
                placeholder="PAULINA CHIMAROKE"
              />
            </div>
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="9870 3456 7890 6473"
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <Label htmlFor="expiry">Expiry</Label>
                <Input
                  id="expiry"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  placeholder="03 / 25"
                />
              </div>
              <div className="w-1/2">
                <Label htmlFor="cvc">CVC</Label>
                <Input
                  id="cvc"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  placeholder="654"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="discountCode">Discount Code</Label>
              <div className="flex">
                <Input
                  id="discountCode"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  placeholder="CHIKAMSO-20-OFF"
                  className="rounded-r-none"
                />
                <Button variant="secondary" className="rounded-l-none">Apply</Button>
              </div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handlePayment}>Pay</Button>
          </div>
        </CardContent>
      </Card>

      {/* Right Side */}
      <Card className="w-1/2 bg-gradient-to-br from-gray-100 to-purple-100 shadow-lg">
  <CardHeader>
    <CardTitle className="text-2xl font-semibold text-gray-800">You're paying,</CardTitle>
    <p className="text-6xl font-bold text-purple-800">$20.00</p>
  </CardHeader>
  <p></p>
  <CardContent>
    <div className="space-y-4 text-gray-700">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold">Appointment Fee</h3>
        </div>
        <p className="font-semibold">$20.00</p>
      </div>
      <div className="flex justify-between">
        <p>Discounts & Offers</p>
        <p>$0.00</p>
      </div>
      <div className="flex justify-between">
        <p>Tax</p>
        <p>$0.00</p>
      </div>
      <div className="flex justify-between font-semibold">
        <p>Total</p>
        <p>$20.00</p>
      </div>
    </div>
  </CardContent>
</Card>

    </div>
  )
}
