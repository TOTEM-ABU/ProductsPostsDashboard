import { useEffect, useState } from 'react';

const Posts = ({ isGrid }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(data => data.json())
            .then(json => {
                setPosts(json.slice(0, 15)); 
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading && <p className="text-center text-lg font-semibold text-slate-700">Loading posts...</p>}

            <div className={`grid ${isGrid ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
                {posts.map(post => (
                    <div
                        key={post.id}
                        className={`p-5 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 ${isGrid ? "bg-gradient-to-br from-white to-gray-100" : "flex items-start gap-4 bg-white"
                            }`}
                    >
                        <div>
                            <h2 className="text-indigo-600 font-bold text-lg mb-1">#{post.id}</h2>
                            <p className="text-slate-700 line-clamp-2">{post.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;
