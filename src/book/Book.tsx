import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import './Book.css';

interface BookProps {
  id: number;
  title: string;
  author: string;
  yearPublished: number;
  photo: string;
}

function Book({ id, title, author, yearPublished, photo }: BookProps) {
  return (
    <Card className="book">
      <CardMedia
        component="img"
        height="180"
        image={photo}
        alt={'Cover of the book titled ${title}'}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          by {author}, {yearPublished}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Book;
