import React, { useState } from 'react';

function Feedback({ activeTab }) {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(5);

  // Handle feedback submission
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedback) {
      alert('Thank you for your feedback! We appreciate your input.');
      setFeedback('');
      setRating(5);
    }
  };

  return (
    <div>
      {/* Feedback Section */}
      {activeTab === 'feedback' && (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Provide Feedback</h2>

          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
            <form onSubmit={handleFeedbackSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Rating</label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`text-2xl ${
                        rating >= star ? 'text-yellow-400' : 'text-muted-foreground'
                      }`}
                      onClick={() => setRating(star)}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Your Feedback</label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="What do you think about our waste management services?"
                  rows={4}
                  className="w-full p-2 border border-border rounded-md"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Feedback;
