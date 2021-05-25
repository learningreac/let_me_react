import React from 'react';
import { List, Avatar } from 'antd';
import { useNavigate } from "react-router-dom";

const MovieList = ({ movies,ClickforDetail}) => {

    let navigate = useNavigate();
    return (
        <div className='movie-list'>
            <List itemLayout='horizontal'>
                {movies.map((movie,index) => (
                    <List.Item key={movie.imdbID} >
                        <List.Item.Meta
                            avatar={<Avatar src={movie.Poster} />}
                            //title={<MovieTitle title={movie.Title}/>}
                            title={<a onClick={() => {
                                        console.log(movie.imdbID); 
                                        navigate(`/movie`); 
                                        ClickforDetail(movie.imdbID)}
                                    }>{movie.Title}</a>}
                            description={movie.Year}
                        />
                    </List.Item>
                ))}
            </List>
        </div>
    )

}


export default MovieList;



