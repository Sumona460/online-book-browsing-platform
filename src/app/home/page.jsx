import Image from 'next/image';
import React from 'react';

const HomeCard = () => {
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <Image
      src="https://i.ibb.co/XZDrhYYQ/download-1.jpg" width={300} height={300}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default HomeCard;