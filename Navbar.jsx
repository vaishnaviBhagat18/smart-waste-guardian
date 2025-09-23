<div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="bg-primary text-primary-foreground p-4 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold mb-4 md:mb-0">Coastal Cleanup</div>
          <div className="flex flex-wrap gap-2 md:gap-4">
            <button 
              className={`px-3 py-2 rounded-md ${activeTab === 'home' ? 'bg-accent text-accent-foreground' : 'hover:bg-primary/80'}`}
              onClick={() => setActiveTab('home')}
            >
              Home
            </button>
            <button 
              className={`px-3 py-2 rounded-md ${activeTab === 'upload' ? 'bg-accent text-accent-foreground' : 'hover:bg-primary/80'}`}
              onClick={() => setActiveTab('upload')}
            >
              Upload
            </button>
            <button 
              className={`px-3 py-2 rounded-md ${activeTab === 'schedule' ? 'bg-accent text-accent-foreground' : 'hover:bg-primary/80'}`}
              onClick={() => setActiveTab('schedule')}
            >
              Schedule
            </button>
            <button 
              className={`px-3 py-2 rounded-md ${activeTab === 'reuse' ? 'bg-accent text-accent-foreground' : 'hover:bg-primary/80'}`}
              onClick={() => setActiveTab('reuse')}
            >
              Reuse Ideas
            </button>
            <button 
              className={`px-3 py-2 rounded-md ${activeTab === 'report' ? 'bg-accent text-accent-foreground' : 'hover:bg-primary/80'}`}
              onClick={() => setActiveTab('report')}
            >
              Report
            </button>
            <button 
              className={`px-3 py-2 rounded-md ${activeTab === 'feedback' ? 'bg-accent text-accent-foreground' : 'hover:bg-primary/80'}`}
              onClick={() => setActiveTab('feedback')}
            >
              Feedback
            </button>
          </div>
        </div>
      </nav>
      </div>