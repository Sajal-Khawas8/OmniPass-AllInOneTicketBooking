import React from 'react'
import '../css/About.css'


export default function About() {
  return (
    <>
      <div className='Aboutus'>
        About Us
      </div>
      <div className='Banner'>
        <div className='Slider'>
          <span>We assure to offer best deals to you</span>
        </div>

      </div>

      <div className='About_Content'>
        What OmniPass Offers
        <div className='point_cards'>
          <div className='point'>
            <h4>No Reservation Fees</h4>
            <p>We don't charge you any booking fees or add any administrative charges and provide a top class service.</p>
          </div>
          <div className='point'>
            <h4>Secure Transactions</h4>
            <p>We facilitate hundreds of thousands of transactions every day through our secure platform, and work to the highest standards to guarantee your privacy. For further details, please check our Privacy Statement</p>
          </div>
          <div className='point'>
            <h4>Instant Confirmation</h4>
            <p> Here every reservation is instantly confirmed. Once you've found your perfect stay, a few clicks are all it takes.</p>
          </div>
          <div className='point'>
            <h4>24/7 Support</h4>
            <p> Whether you've just booked or are already enjoying your trip,our customer experience team are on hand around the clock to answer your questions and advocate on your behalf.</p>
          </div>
          <div className='point'>
            <h4>Low Rates</h4>
            <p> OmniPass guarentees to offer you the best available rates. And with our promise to price match, you can rest assured that you're always getting a great deal </p>
          </div>
          <div className='point'>
            <h4>All in One</h4>
            <p> Omnipass allows you to not only book your travel tickets i.e. Train, Flight, Bus, Metro but also allows you to plan you stay with 5 star hotels. Even we facilitate you to book your movie tickets so that you don't miss any entertainment.  </p>
          </div>
        </div>
        <div className='policy'>
          Privacy Policy
          <p>
            Privacy Policy  of Omnipass is committed to its esteemed user’s privacy and security and to take steps designed to secure personal and financial information and to make all reasonable endeavors to keep the detail secure and private. As a general rule, this website/mobile application does not collect Personal Information about you when you visit the site. You can generally visit the site without revealing your Personal Information, unless you choose to provide such information. Users may access or/and download the information or material outlined on www.omnipass.in and its Mobile Applications only for personal and non-commercial use. The unauthorized use/ illegal use of the website/ mobile application is strictly prohibited.  Omnipass -E Ticketing platform may use social media networks such as Facebook, Twitter etc. to share our information/videos for better convenience of the commuters and general public at large. We do not claim any responsibility nor shall any claim stand against Omnipass if any error/ inconvenience occurs while browsing it or any objection put on it by these site hosting organization/agencies at any time.
          </p>
          <ul>
            <li>
              <span>Site Visit Data:<br></br></span>
              <div className='underline'></div>
              This website/ mobile application records your visit and logs the following information for statistical purposes such as, your IP address, type of browser you use, type of operating system, date and time you access the site, webpages you have accessed, dates downloaded etc. This information may be used to track aggregate traffic patterns .Omnipass E-Ticketing website and mobile applications does not automatically capture the specific personal information from you, (like name, phone number or email address), that allows us to identify the end user individually.
            </li>
            <li>
              <span>Cookies:<br></br></span>
              This site uses cookies to give you a personalized experience on the website and ensure that it is functioning effectively. In order to identify your interest in our products, and to track the effectiveness of advertising served by us, such cookies are used. This website does not collect any personal information during this process.
            </li>
            <li>
              <span>Browser Controls:<br></br></span>
              Majority of the browsers will allow you to see what cookies you have, and delete them on an individual basis or block cookies from any particular or all websites. Basically, cookies allow ease of access, by logging you in without having to type your login name each time (only your password is needed). We may also use such cookies to display any advertisement(s) to you while you are on the Website or to send you offers (or similar emails – provided you have not opted out of receiving such emails) focusing on products which may be of your interest. You should be aware that if the cookies are deleted, any preference you have set will be lost which includes your preference to opt-out from cookies, as this itself requires an opt- out cookie to have been set. Also, this may also lead to unavailability of some services.
            </li>
            <li>
              <span>Automatic Logging of Session Data:<br></br></span>
              Each time you access Omnipass E-Ticketing website / mobile applications, your session data gets logged. Session data may consist of various aspects like the IP address, operating system and type of browser software being used and the activities done by the User on the Website / Mobile application. We collect session data as it helps us analyse User’s choices, browsing pattern including the frequency of visits and duration for which a User is logged on. It also helps us diagnose problems with our servers and lets us better administer our systems. The aforesaid information cannot identify any User personally. However, it may be possible to determine a User's Internet Service Provider (ISP), and the approximate geographic location of User's point of connectivity through the above session data.
            </li>
            <li>
              <span>Type of Information Collected :<br></br></span>

              Registration on the Website / Mobile Applications: Information which you provide while subscribing to or registering on the Website / mobile application, including but not limited to the information about your personal identity such as name, gender, marital status, age or Date of birth, Nationality etc., your contact details such as your email address, complete postal addresses, contact number etc.

            </li>
          </ul>
          <div className='list'>
            <span>USE OF YOUR PERSONAL INFORMATION:<br></br></span>
            We may also use your Personal Information for several reasons including but not limited to
            <ul>
              <li>Confirm your reservations with respective service providers</li>
              <li>Keep you informed of the transaction status</li>
              <li>Send booking confirmations either via SMS or WhatsApp or any other messaging service</li>
              <li>Send any updates or changes to your booking(s)</li>
              <li>Allow our customer service to contact you, if necessary</li>
              <li>Customize the content of our website, mobile site and mobile app</li>
              <li>Request for reviews of products or services or any other improvements</li>
            </ul>
          </div>
        </div>
        <div className='FAQ'>
          Frequently Asked Questions (FAQ's)
          <div className='Accordion'>
            
              <div className='flex'>
              <ul>
                <li>
                  <label for="first">How can I check the PNR status of my train ticket reservation<span>&#x3e;</span></label>
                  <input type="radio" name="accordion" id="first"></input>
                  <div class="content"><p>You can check the PNR status of your train ticket reservation through Omnipass by going the Omnipass website &#x3e;Trains &#x3e;PNR check &#x3e;Enter PNR Number. This will display all the related information   </p></div>
                </li>
                <li>
                  <label for="second">Is the information on seat availability and pricing reliable?<span>&#x3e;</span></label>
                  <input type="radio" name="accordion" id="second" ></input>
                  <div class="content"><p>The seating and pricing details available on our site are brought directly from the Indian Railways Reservation System. To make your search faster, we have cached the data on trains, routes and fares on our site. This information is updated many times in an hour.</p></div>
                </li>
                <li>
                  <label for="third">What are the benefits of registering on the site<span>&#x3e;</span></label>
                  <input type="radio" name="accordion" id="third"></input>
                  <div class="content"><p>By registering, you get access to your booking history on site. You can also opt to get information on special offers.</p></div>
                </li>
            </ul>
            </div>
        

          <div className='flex'>
            <ul>
              <li>
                <label for="fourth">Can I choose my seat at the cinema?<span>&#x3e;</span></label>
                <input type="radio" name="accordion" id="fourth"></input>
                <div class="content"><p>Absolutely, this is one of the most beneficial feature we offer so that our customers have a good ticket experience. You have the choice of selecting or changing your seats at every step of transaction.</p></div>
              </li>

              <li>
                <label for="fifth">What are the various payment options available online to make payment?<span>&#x3e;</span></label>
                <input type="radio" name="accordion" id="fifth"></input>
                <div class="content"><p>The various payment options are:<br></br>
                  Credit Card<br></br>
                  Debit Card<br></br>
                  UPI</p></div>
              </li>
              <li>
                <label for="sixth">How does OmniPass find such low flight prices?  <span>&#x3e;</span></label>
                <input type="radio" name="accordion" id="sixth"></input>
                <div class="content"><p>Omnipass processes over 2 million flight queries annually and displays results from hundreds of airlines and third party sites,allowing it to find a variety of flight  and options.It  also displays results from 2M+ properties and millions of verified reviews so users can see as many available travel options as possible. </p></div>
              </li>
            </ul>

          </div>
          </div>
        </div>


      </div>
      

    </>
  )
}
