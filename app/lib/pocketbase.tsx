import pocketbase from 'pocketbase';

const pb = new pocketbase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

export default pb;