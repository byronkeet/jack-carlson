import React from 'react';

export default function About() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#644c78] mb-6">About Jack Carlson</h2>
            <div className="prose prose-lg">
              <p>
                Jack grew up in rainy Bellevue, WA and beginning at the age of 5, he had a passion for numbers and stats. He would routinely wake up at 6:30am to pick up the newspaper and dissect the sports page. He continued in that passion attending University of Arizona and earning a finance degree in 2016.
              </p>
              <p>
                Following graduation, he led a global mission's team in East Asia for two years, ministering to college students in a "small town" of 7 million. Upon return, he married his co-leader, Izzy. Early in 2020, he connected with Jonathan Wield and his current journey with Unbridled Wealth began.
              </p>
              <p>
                A teacher at heart, Jack loves bringing clarity and transparency to the topic of money and helping people see the big picture of their finances. His mission is to help clients grow in financial knowledge and confidence so they can control and steward their wealth for impact and enjoyment.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://unbridledwealth.com/wp-content/uploads/2022/12/Jack-Carlson-Family-Pic-scaled.jpg"
              alt="Jack Carlson with family"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}