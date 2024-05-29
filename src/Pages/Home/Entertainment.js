import { useEffect, useState } from "react";
import YouTube from "react-youtube";

export const Entertainment = ()=>{
    const apiKey = process.env.REACT_APP_youtubeApiKey;
    const [playList, setPlayList] = useState('')
    useEffect(()=>{
        const getPlayList = async()=>{
            const response = await fetch(`https://WWW.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL3BK2yFLC_YBvEyHLxZfmI5u74ywTdvMn&maxResults=10&key=${apiKey}`)
            const json = await response.json();
            if(response.ok){
                setPlayList(json.items)
            }
            if(!response.ok){
                console.log('error fetching data')
            }
        }
        getPlayList();
    },[apiKey]);
    setInterval(()=>{
        const element = document.querySelectorAll('.ania');

        element.forEach(element=>{
            element.classList.remove('linkAnimation');
        })

        setTimeout(()=>{
            element.forEach(element=>{
                element.classList.add('linkAnimation');
            })
           
        }, 1000)
    }, 3000);
    return(
        <>
            <section id="entertainment-section" className="background">
                <div className="container-fluid">
                    <h1 className="monserrat">
                        eic Entertainment 
                    </h1>
                    <span> Some Of Our Premium Contents</span>

                  

                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel slide" data-pause="hover" data-bs-interval="8000">
                            <div className="carousel-inner">
                                <div className="carousel-item active" >
                                    <div className="row" >
                                        <div className="">
                                            {
                                                playList && playList.slice(0,2).map(list=>(
                                                    <div key={list.id}>
                                                        <YouTube videoId={list.snippet.resourceId.videoId} />
                                                        <a className='btn btn-md btn-secondary ania' rel="noreferrer"  target="_blank" href={`HTTPS://WWW.youtube.com/watch?v=${list.snippet.resourceId.videoId}`}>watch youTube</a>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item" >
                                <div className="row" >
                                        <div className="">
                                            {
                                                playList && playList.slice(2,4).map(list=>(
                                                    <div key={list.id}>
                                                        <YouTube videoId={list.snippet.resourceId.videoId} />
                                                        <a className='btn btn-md btn-secondary linkAnimation ania' rel="noreferrer"  target="_blank"  href={`HTTPS://WWW.youtube.com/watch?v=${list.snippet.resourceId.videoId}`}>watch youTube</a>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item" >
                                <div className="row" >
                                        <div className="">
                                            {
                                                playList && playList.slice(4,6).map(list=>(
                                                    <div key={list.id}>
                                                        <YouTube videoId={list.snippet.resourceId.videoId} />
                                                        <a className='btn btn-md btn-secondary ania linkAnimation' rel="noreferrer"  target="_blank" href={`HTTPS://WWW.youtube.com/watch?v=${list.snippet.resourceId.videoId}`}>watch youTube</a>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item" >
                                <div className="row" >
                                        <div className="">
                                            {
                                                playList && playList.slice(6,8).map(list=>(
                                                    <div key={list.id}>
                                                        <YouTube videoId={list.snippet.resourceId.videoId} />
                                                        <a className='btn btn-md btn-secondary ania linkAnimation' rel="noreferrer"  target="_blank" href={`HTTPS://WWW.youtube.com/watch?v=${list.snippet.resourceId.videoId}`}>watch youTube</a>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>


                            </div>

                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                                </button>
                        </div>

                    
                </div>
            </section>
        </>
    )
}

// GET https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCp7ZNTdlaVr7EO9d1cqyC0A&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
