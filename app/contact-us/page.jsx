import React from 'react'
import Navbar from '../_components/Navbar'
import Footer from '../_components/Footer'
import { Globe, Mail, Phone, Smartphone } from 'lucide-react'

const page = () => {
    return (
        <>
            <Navbar />

            <section className='bg-white py-16 px-5 lg:px-32'>
                <h2 className='text-center font-bold text-2xl text-black'>Contact US Anytime You Want!</h2>
                <p className='text-center pt-2 pb-10 text-black'>Have any questions? We’re here to assist you in selecting the best TV, internet, or phone deals round the clock.</p>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                    <div className="lg:col-span-2">
                        <form action="" method="post">
                            <input type="text" placeholder='Your name*' className='w-full border mb-2 p-3 rounded-sm' />
                            <input type="text" placeholder='Your email*' className='w-full border mb-2 p-3 rounded-sm' />
                            <input type="text" placeholder='Phone Number*' className='w-full border mb-2 p-3 rounded-sm' />
                            <input type="text" placeholder='Subject*' className='w-full border mb-2 p-3 rounded-sm' />
                            <textarea rows={10} placeholder='Your message' className='w-full border mb-2 p-3 rounded-sm'></textarea>
                            <button className='bg-primary text-white px-10 py-3 rounded-full mt-3'>Submit</button>
                            <div className='pt-5 text-black'>*By clicking on the SUBMIT button, you authorize us to contact you via email or phone number to discuss the available options in your area!</div>
                        </form>
                    </div>
                    <div className="">
                        <div className='text-center px-28 pb-5 mt-5'>
                            <Globe className='mx-auto text-primary w-8 h-8' />
                            <h3 className='font-bold text-2xl py-2 text-black'>Find us here</h3>
                            <p className='text-black'>9237 Elk Grove Florin Rd Apt 127, Elk Grove, CA 95624</p>
                        </div>
                        <hr />
                        <div className='text-center p-5'>
                            <Mail className='mx-auto text-primary w-8 h-8' />
                            <h3 className='font-bold text-2xl py-2 text-black'>Email Us</h3>
                            <p className='text-primary'>info@optimuminternetreseller.com</p>
                        </div>
                        <hr />
                        <div className='text-center p-5'>
                            <Smartphone className='mx-auto text-primary w-8 h-8' />
                            <h3 className='font-bold text-2xl py-2 text-black'>Call Us</h3>
                            <p className='text-primary'>+1-877-451-0051</p>
                            <p className='text-black'>Open Monday to Friday 8:00 AM to 10:00 PM EST</p>
                        </div>
                    </div>
                </div>
            </section>




            <section className="bg-white py-16 px-5 lg:px-32">
                <div className="">
                    <p className="text-sm mb-2 text-black">General Disclaimers:</p>
                    <p className="text-sm mb-2 text-black">99.9% reliability claim excludes outages caused by external events and scheduled maintenance.</p>
                    <p className="text-sm mb-2 text-black">Optimum TV:-</p>
                    <p className="text-sm mb-2 text-black">Movies On Demand titles available at an additional charge. Service availability, equipment needed, and pricing may vary. VOD is not available in all areas. Not all programs available in VOD format. Check local system for details. An SD or HD digital cable box is required. On Demand is not available on certain devices such as Cable CARDs or Digital Tuning Adapters (DTA).</p>
                    <p className="text-sm mb-2 text-black">Disney, All Rights Reserved, Disney Entertainment</p>
                    <p className="text-sm mb-2 text-black">© 2024 Showtime Networks Inc., a Paramount Company. SHOWTIME and related marks are trademarks of Showtime Networks Inc. Paramount+ and related marks are trademarks of Paramount Pictures Corporation. Individual programs, devices and marks are the property of their respective owners. All Rights Reserved.</p>
                    <p className="text-sm mb-2 text-black">Starz® and related channels and service marks are the property of Starz Entertainment, LLC. Visit starz.com for airdates/times. Mary & George ©2023 Sky Studios Limited. All rights reserved.</p>
                    <p className="text-sm mb-2 text-black">Max subscription includes access to Max app, HBO channels and On Demand. For specific technical requirements for devices, go to help.max.com. Max is used under license. Use of Max is subject to its own terms and conditions, see max.com/terms-of-use/en-us for details. Programming and content subject to change.</p>
                    <p className="text-sm mb-2 text-black">**Offer valid for new customers only. Cloud DVR (25 hours) included in select 1 Gig Internet + TV and 1 Gig Internet + TV + phone packages at no extra cost. Restrictions apply.</p>
                    <p className="text-sm mb-2 text-black">Must be an Optimum TV customer to enjoy built-in apps.</p>
                    <p className="text-sm mb-2 text-black">News 12 and News12+ are not available in all areas.</p>
                    <p className="text-sm mb-2 text-black">Programming, pricing, terms and offers subject to change and discontinuance without notice. Optimum, the Optimum family of marks and Optimum logos are registered trademarks of CSC Holdings, LLC</p>
                    <p className="text-sm mb-2 text-black">Optimum Internet:-</p>
                    <p className="text-sm mb-2 text-black">99.9% reliability claim excludes outages caused by external events and scheduled maintenance.</p>
                    <p className="text-sm mb-2 text-black">8 Gig Fiber Internet is currently available in portions of NY, NJ & CT. Fiber Internet is not available in all areas. In some areas, Internet is delivered over cable network with different speeds. Enter your address to see availability in your area.</p>
                    <p className="text-sm mb-2 text-black">Smart WiFi 6 claim based on comparison of maximum theoretical speeds for Optimum’s Smart WiFi 6 (802.11ax) and Smart WiFi 5 (802.11ac) gateways.</p>
                    <p className="text-sm mb-2 text-black">INTERNET EQUIP, TAXES & FEES: For online orders, standard rates for professional installation may apply where free self-install is available. 1 free Gateway included. Limit 1 per household. 1 free WiFi extender available if recommended by your Optimum technician. WiFi extender(s) may be needed in order to connect wirelessly throughout Subscriber’s residence. For other services and supplies (add’l equip., install, paper bill, device protection, misc. services, etc.) taxes may apply. Min system req’s & equip configs apply.</p>
                    <p className="text-sm mb-2 text-black">OPTIMUM PREPAID MASTERCARD: Offer is not available to individuals who have previously participated in a Prepaid/Gift Card or Snappy Gift promotion within the past 12 months. Must maintain promotion and remain in good standing with no past due or returned payments throughout first 90 days after account activation in order to receive Prepaid Mastercard. Card will be mailed 4-6 weeks after 90-day period or customer may elect to receive virtually. Limit 1 per customer. Prepaid Mastercard cannot be used to pay Optimum monthly bill. Card/Virtual card is issued by Pathward®, N.A., Member FDIC, pursuant to license by Mastercard International Incorporated. Mastercard and the circles design are registered trademarks of Mastercard International Incorporated. No cash access or recurring payments. Card can be used where Debit Mastercard is accepted. Virtual card can be used where Debit Mastercard is accepted online, for phone/mail orders or in stores that accept mobile wallet. Card/Virtual card valid for up to 12 months; unused funds will forfeit after the valid thru date. Terms and conditions apply.</p>
                    <p className="text-sm mb-2 text-black">MAX: Max offer req’s Optimum Internet 500 Mbps for 6 months or 1 Gig & above for 12 months. Customer must maintain promotion and remain in good standing throughout promotional period to maintain included Max. After promotional period, Max auto renews at the then prevailing rate (currently $15.99/mo.). Pricing subject to change. Cancel any time at 877-694-9474. Cancellation effective at end of then-current billing period. Offer available for a limited time. Max and related elements are property of Home Box Office, Inc. All other networks, devices, titles, related trademarks and service marks are the property of their respective owners. Use of Max is subject to its own terms and conditions, see max.com/terms-of-use for details. Programming and content subj. to change.</p>
                    <p className="text-sm mb-2 text-black">Optimum Mobile:-</p>


                    <p className="text-sm mb-2 text-black mt-10">BYOD Offer: Bring Your Own Device (“BYOD”) and get $120 in credits per line ($10 per line) when you activate a new Unlimited Max line or $60 per line in credits ($5 per line) when you activate a new Unlimited line, up to 4 BYOD activations. Number must be transferred to Optimum within 14 days. BYOD device must remain on Unlimited or Unlimited Max line and account must remain in good standing with no past due or returned payments to receive credits. Credits start within 3 bill cycles. Cannot be combined with other offers. Limited time offer.</p>
                    <p className="text-sm mb-2 text-black">Offer details: iPhone 15 on us with trade-in. For well-qualified new or existing customers on a current Unlimited or Unlimited Max plan. Savings applied as 36-monthly bill credits toward the purchase or finance of an iPhone 15 128 GB or 512 GB. Trade-in value of $175 or higher is required. Trade-in conditions apply. Trade-in must be shipped within 21 days of iPhone 15 purchase. Monthly trade-in credits (trade-in value) and ‘iPhone on us’ credits start within 3 bill cycles once trade-in is complete. ‘iPhone on us’ credits will not be displayed in check-out. Max 2 per account. Changes in phone or plan may result in cancellation of remaining credits. Tax on pre-credit price due at sale. Returns allowed within 21 days of service subject to restocking fee. Offer subject to discontinuance or change at any time. While supplies last.</p>
                    <p className="text-sm mb-2 text-black">Offer details: Samsung Galaxy S24 128 GB on us with trade-in. For well-qualified new or existing customers on a current Unlimited or Unlimited Max plan. Savings applied as 36-monthly bill credits toward the purchase or finance of a Samsung Galaxy S24 128 GB. Trade-in value of $175 or higher is required. Trade-in conditions apply. Trade-in must be shipped within 21 days of Samsung Galaxy S24 128 GB purchase. Monthly trade-in credits (trade-in value) and ‘Phone on us’ credits start within 3 bill cycles once trade-in is complete. ‘Phone on us’ credits will not be displayed in check-out. Max 2 per account. Changes in phone or plan may result in cancellation of remaining credits. Tax on pre-credit price due at sale. Returns allowed within 21 days of service subject to restocking fee. Offer subject to discontinuance or change at any time. While supplies last.</p>
                    <p className="text-sm mb-2 text-black">Offer details: Motorola moto g stylus Only $5/mo. with current Unlimited or Unlimited Max plan. Get $80 OFF with promo code SAVE80. For well-qualified new and existing customers. Savings applied via 36-monthly bill credits toward the finance of moto g stylus 5G. Monthly bill credits start in within 2 bill cycles. Tax on pre-credit price due at sale. Changes in phone or plan may result in cancellation of remaining credits. Five device maximum within the first 90 days for new customers. Returns allowed within 21 days of service subject to restocking fee. Offer subject to discontinuance or change at any time. While supplies last.</p>
                    <p className="text-sm mb-2 text-black">Visa® Reward Card: Offer is not available to individuals who have previously participated in an Optimum Visa® Reward Card promotion within the past 12 months. Visa Reward Card will be mailed to customers who maintain promotion and remain in good standing with no past due or returned payments throughout first 90 days after account activation. Allow 4-6 weeks for delivery. Limit 1 per customer. Visa Reward Card cannot be used to pay Optimum monthly bill. Card value expires in 12 mos. Visa Reward Card may be used when making purchases from merchants in the U.S. and District of Columbia everywhere Visa debit cards are accepted. No ATM access. Terms and Conditions apply to Reward Cards. See Cardholder Agreement for details.</p>
                    <p className="text-sm mb-2 text-black">8 Gig Fiber Internet is currently available in portions of NY, NJ & CT. Fiber Internet is not available in all areas. In some areas, Internet is delivered over cable network with different speeds. Call to see availability in your area.</p>
                    <p className="text-sm mb-2 text-black">Smart WiFi 6 claim based on comparison of maximum theoretical speeds for Optimum’s Smart WiFi 6 (802.11ax) and Smart WiFi 5 (802.11ac) gateways.</p>
                    <p className="text-sm mb-2 text-black">Optimum Mobile: $15/mo. per line for 1 GB data, unlimited talk & text. Auto-pay required. Other monthly charges apply per line, including $20 activation fee, and may include roaming charges, taxes, government fees and other Optimum Mobile fees and surcharges apply.</p>
                    <p className="text-sm mb-2 text-black">Not available in all areas. First set top box is included, additional equipment will be charged at regular monthly rates. Taxes apply, plus certain add’l fees will be added to bill and are subject to change during and after promotion period. Min system req’s & equip configs apply.</p>
                    <p className="text-sm mb-2 text-black">Movies On Demand titles available at an additional charge. Service availability, equipment needed, and pricing may vary. VOD is not available in all areas. Not all programs available in VOD format. Check local system for details. An SD or HD digital cable box is required. On Demand is not available on certain devices such as CableCARDs or Digital Tuning Adapters (DTA).</p>
                    <p className="text-sm mb-2 text-black">Must be an Optimum TV customer to enjoy built-in apps.</p>
                    <p className="text-sm mb-2 text-black">News 12 and News12+ are not available in all areas.</p>
                    <p className="text-sm mb-2 text-black">Programming, pricing, terms and offers subject to change and discontinuance without notice. Optimum, the Optimum family of marks and Optimum logos are registered trademarks of CSC Holdings, LLC, ©2024 CSC Holdings, LLC.</p>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default page