'use client';

import useSWR from 'swr';

function BlogPage() {
    const { data: posts, error } = useSWR('posts', fetcher);

    if (error) return <div className='min-h-screen bg-off-white pt-20 px-8 text-center text-dark text-3xl font-extrabold sm:text-4xl'>Failed to load</div>
    if (!posts) return <div>Loading...</div>

    return (
        <section id="blog" className="min-h-screen bg-off-white pt-20 px-8">
            <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
                    <h1 className="text-dark text-3xl font-extrabold sm:text-4xl">Latest blog posts</h1>
                    <p className="text-dark">Stay updated on the latest news.</p>
                    <form onSubmit={(e) => e.preventDefault()} className="items-center justify-center gap-3 sm:flex">
                        <div className="relative">
                            <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-secondary shadow-sm rounded-lg sm:max-w-xs"
                            />
                        </div>
                        <button className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-secondary hover:bg-secondary-dark active:bg-secondary-dark active:shadow-none rounded-lg shadow sm:mt-0 sm:w-auto">
                            Subscribe
                        </button>
                    </form>
                </div>
            <div className='grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3 pb-20'>
                {posts.map((items, key) => (
                        <div className="w-full mx-auto group sm:max-w-sm bg-white p-8 shadow-md rounded-md" key={key}>
                            <a href={items.slug}>
                                <img src={`http://127.0.0.1:8090/api/files/${items.collectionId}/bwlx6qlu0xgpiim/07DX9lh6xiQr_UVxl1wReii.png?token=`} loading="lazy" alt={items.title} className="w-full rounded-lg" />
                                <div className="mt-3 space-y-2">
                                    <span className="block text-primary text-sm">{items.created}</span>
                                    <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                                        {items.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{items.blurb}</p>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default BlogPage;
