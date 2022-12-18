import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CardFilme from './Components/CardFilme';
import { Container, Row } from 'reactstrap';
import Header from './Components/Header';


function App() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        api
            .get()
            .then((response) => setMovie(response.data.results))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    console.log(movie);

    return (
        <div className="App">
            <Header />
            <Container fluid >
                <Row>
                    {
                        movie.map((filme, index) => (
                            <CardFilme

                                filme={filme}
                                key={index}
                            />

                        ))
                    }
                </Row>
            </Container>
        </div>
    );
}

export default App;
