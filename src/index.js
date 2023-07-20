import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import reducer from './reducers';
import { Provider } from 'react-redux';
import { legacy_createStore, compose } from 'redux'


const initialState = {
    "user": {},
    "playing": {},
    "search": [],
    "myList": [],
    "trends": [
        {
            "id": 2,
            "slug": "tvshow-2",
            "title": "Oshi-Noko",
            "type": "Scripted",
            "language": "English",
            "year": 2009,
            "contentRating": "16+",
            "duration": 164,
            "cover": "https://www.geekmi.news/__export/1683066642267/sites/debate/img/2023/05/02/oshi_no_ko.jpg_554688468.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://youtu.be/ZRtdQ81jPUQ?t=5"
        },
        {
            "id": 3,
            "slug": "tvshow-3",
            "title": "Darling in the franxx",
            "type": "Adventure",
            "language": "English",
            "year": 2002,
            "contentRating": "16+",
            "duration": 137,
            "cover": "https://images.justwatch.com/poster/304511750/s718/darling-in-the-franxx.%7Bformat%7D",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://youtu.be/hCzkkHwR2gg?t=3"
        },
        {
            "id": 4,
            "slug": "tvshow-4",
            "title": "The eminence in shadow",
            "type": "Comedy",
            "language": "English",
            "year": 2014,
            "contentRating": "16+",
            "duration": 163,
            "cover": "https://www.spieltimes.com/wp-content/uploads/2023/05/The-Eminence-in-Shadow-Season-2-Release-window-new-trailer-and-more.png",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://youtu.be/9iQVgj4z-I4?t=6"
        },
        {
            "id": 5,
            "slug": "tvshow-5",
            "title": "Hell's Paradise",
            "type": "Scripted",
            "language": "English",
            "year": 2014,
            "contentRating": "16+",
            "duration": 194,
            "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAKPdxzzJxQRwQlxCtwlIxE4AyVJmYsbXDAw&usqp=CAU",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://youtu.be/04WuoQMhhxw?t=4"
        },
        {
            "id": 6,
            "slug": "tvshow-6",
            "title": "Demon Slayer: Kimetsu no Yaiba",
            "type": "Scripted",
            "language": "English",
            "year": 2017,
            "contentRating": "16+",
            "duration": 124,
            "cover": "https://image.api.playstation.com/vulcan/ap/rnd/202106/1704/JzL1NLQvok7Pghe9W5PP2XNV.png",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://youtu.be/YkJvHe3KK2c?t=1"
        },
        {
            "id": 7,
            "slug": "tvshow-7",
            "title": "Jujutsu Kaisen",
            "type": "Drama",
            "language": "English",
            "year": 2011,
            "contentRating": "16+",
            "duration": 179,
            "cover": "https://www.formulatv.com/images/series/posters/2900/2963/dest_3.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://youtu.be/GwaRztMaoY0?t=4"
        }
    ],
    "originals": [
        {
            "id": 8,
            "slug": "tvshow-8",
            "title": "Mushoku Tensei",
            "type": "Action",
            "language": "English",
            "year": 2012,
            "contentRating": "16+",
            "duration": 148,
            "cover": "https://freakelitex.com/wp-content/uploads/2023/06/Mushoku-Tensei-temporada-2-episodio-1-del-anime-donde-y-cuando-ver-online-en-espanol-y-legal.webp",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://youtu.be/PINgF6rCuME?t=22"
        },
        {
            "id": 9,
            "slug": "tvshow-9",
            "title": "Watashi no shiawase na kekkon",
            "type": "Action",
            "language": "English",
            "year": 2019,
            "contentRating": "16+",
            "duration": 128,
            "cover": "https://upload.wikimedia.org/wikipedia/en/1/1d/My_Happy_Marriage_vol._1_cover.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://youtu.be/sfiG9LELNb4?t=4"
        },
        {
            "id": 10,
            "slug": "tvshow-10",
            "title": "Otome no game hametsu flag",
            "type": "Animation",
            "language": "English",
            "year": 2011,
            "contentRating": "16+",
            "duration": 346,
            "cover": "https://gamefaqs.gamespot.com/a/box/3/7/8/846378_front.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://youtu.be/eBmYQpT0Mk4?t=4"
        },
        {
            "id": 11,
            "slug": "tvshow-11",
            "title": "Skip to loafer",
            "type": "War",
            "language": "English",
            "year": 2015,
            "contentRating": "16+",
            "duration": 226,
            "cover": "https://m.media-amazon.com/images/M/MV5BMWY1Yjg0Y2UtYjU5Yy00YTk5LTg0YzEtMDgzODZlZDVjYTBjXkEyXkFqcGdeQXVyODMyNTM0MjM@._V1_FMjpg_UX1000_.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://youtu.be/ZWoXl2RxdKg?t=2"
        },
        {
            "id": 12,
            "slug": "tvshow-12",
            "title": "Death Note",
            "type": "Comedy",
            "language": "English",
            "year": 2018,
            "contentRating": "16+",
            "duration": 190,
            "cover": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2015/02/death-note-light-yagami.jpg?fit=1680%2C1050&quality=50&strip=all&ssl=1",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://youtu.be/kNyR46eHDxE?t=4"
        },
        {
            "id": 13,
            "slug": "tvshow-13",
            "title": "kamisama hajimemashita",
            "type": "Drama",
            "language": "English",
            "year": 2010,
            "contentRating": "16+",
            "duration": 160,
            "cover": "https://m.media-amazon.com/images/M/MV5BZmE2NTBlY2QtNzNjYy00OGIxLTg2YWYtMTk0MWQwNDA2ZWQzXkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_FMjpg_UX1000_.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://youtu.be/STjQZ2BpcTc?t=3"
        }
    ]
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__() || compose;
const store = legacy_createStore(reducer, initialState, composeEnhancers)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'));