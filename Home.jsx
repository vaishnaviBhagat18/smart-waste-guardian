import React, { useState } from 'react';

function Home() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div>
      {/* Main Content */}
      <main className="container mx-auto p-4">
        {/* Home Section */}
        {activeTab === 'home' && (
          <div className="space-y-8">
            <section className="text-center py-12 bg-muted rounded-lg">
              <h1 className="text-4xl font-bold mb-4">Coastal Waste Management</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join us in keeping our beaches clean and promoting sustainable waste practices
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-3">Report Issues</h2>
                <p className="mb-4">
                  See litter or pollution? Report it quickly through our system.
                </p>
                <button
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
                  onClick={() => setActiveTab('report')}
                >
                  Report Now
                </button>
              </div>

              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-3">Join Cleanups</h2>
                <p className="mb-4">Participate in scheduled beach cleaning events.</p>
                <button
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
                  onClick={() => setActiveTab('schedule')}
                >
                  View Schedule
                </button>
              </div>

              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-3">Waste Reuse</h2>
                <p className="mb-4">
                  Discover creative ways to reuse materials instead of trashing them.
                </p>
                <button
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
                  onClick={() => setActiveTab('reuse')}
                >
                  Learn More
                </button>
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;
