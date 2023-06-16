import React from 'react'

function SuccessPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8 dark:text-white min-h-screen">
        <h1>Thank you for your submission!</h1>
        <p>We will get back to you as soon as possible.</p>
        <p>Have a great day!</p>
        <p>
            <a href="/" className="text-blue-600 hover:underline">
                Go back home
            </a>
        </p>
        {/* Add any additional content or components for the success page */}
    </div>
  )
}

export default SuccessPage;