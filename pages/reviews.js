import React, {useEffect, useState} from 'react';
import Head from 'next/head'

const Reviews = ({reviews}) => {

    return (
      <>
        <Head>
          <title>Жирные Бургеры | О Нас</title>
          <meta name="title" content="Все о жирных бургерах"/>
        </Head>
        <div>
          <h1>Отзывы клиентов</h1>
          <div>
            {!!reviews.length && reviews.slice(0, 20).map(review => {
                return (
                    <div key={review.id} className='review'>
                        {review.id}
                        {`${review.body.slice(0, 90)}...`}
                    </div>
                )
            })}
          </div>
        </div>
      </>
    );
  }

  export async function getServerSideProps(context) {
    const responce = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await responce.json()

    return {
        props: {
            reviews: data.slice(0, 20)
        }
    }
  }

export default Reviews