const KEY = "m7KMqyz5URgBtAQFK66eior5Flj2";


export const getMatches = () => {
    const url =  `https://cricapi.com/api/matches?apikey=${KEY}`;

    return fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const getMatchDetail = (id) => {
    const url = `https://cricapi.com/api/cricketScore?apikey=${KEY}&unique_id=${id}`;

    return fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};