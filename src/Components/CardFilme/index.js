import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card, CardBody, Container, CardTitle, CardSubtitle, CardText } from 'reactstrap';
export default function CardFilme(props) {

    const filme = props.filme;
    const imgage = "https://image.tmdb.org/t/p/w500/" + filme.backdrop_path;
    const title = filme.original_title;
    const data = filme.release_date;
    const popularity = filme.popularity;

    return (
        <Card className="m-2"
            style={{
                width: '18rem',
                heigth: '54rem'
            }}
        >
            <img
                alt="Sample"
                src={imgage}

            />
            <CardBody>


                <CardTitle tag="h5" >
                    {title}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    Popularidade: {popularity}
                </CardSubtitle>
                <CardText>
                    {data}
                </CardText>




                <Button>
                    Button
                </Button>
            </CardBody>
        </Card>
    );

}