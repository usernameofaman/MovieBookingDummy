import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../app/styles/Home.module.css";
import seatAvailabilityData from "../../app/components/home/seats";
import "./book.css";

const generateSeat = (array: number[], seatAvailability: {}, modifyAvailability: any) => {
  return (
    <>
      {array.map((seat: any) => (
        <img className="seat-area" onClick={() => modifyAvailability(seat)} key={seat} src={seatAvailability[seat] ? "/seat.png" : "/seatfilled.png"} />
      ))}
    </>
  );
};

export default function book() {
  const router = useRouter();
  const { book } = router.query;
  console.log(book);

  const [seatAvailability, setSeatAvailability] = React.useState<number[]>(seatAvailabilityData);
  const [available, setAvailable] = React.useState<number[]>([]);
  const [isBooked, setIsBooked] = React.useState<boolean>(false);

  useEffect(() => {
    setAvailable(findAvailableSeats(seatAvailability));
  }, [seatAvailability]);

  const modifyAvailability = (seatNumber: any) => {
    let currAvailabilty = { ...seatAvailability };
    setSeatAvailability({ ...seatAvailability, [seatNumber]: !currAvailabilty[seatNumber] });
  };

  function findAvailableSeats(seatAvailability: number[]) {
    const availableSeats = [];

    for (const seatNumber in seatAvailability) {
      if (seatAvailability.hasOwnProperty(seatNumber) && !seatAvailability[seatNumber]) {
        availableSeats.push(seatNumber);
      }
    }

    return availableSeats;
  }

  return (
    <div className={styles.container}>
      {!isBooked ? (
        <div className="theatre-map">
          <h2 className="seat-selection-header">Select your seats for {book}</h2>
          <div className="theatre-screen">
            <img className="main-screen" src="/screen.png" />
          </div>
          <div style={{ display: "flex" }}>
            <div>{generateSeat([1, 2, 3, 4, 5, 6, 7, 8, 9], seatAvailability, modifyAvailability)}</div>
            <div style={{ margin: "20px" }}></div>
            <div>{generateSeat([10, 11, 12, 13, 14, 15, 16, 17, 18], seatAvailability, modifyAvailability)}</div>
          </div>
          <div style={{ display: "flex" }}>
            <div>{generateSeat([19, 20, 21, 22, 23, 24, 25, 26, 27], seatAvailability, modifyAvailability)}</div>
            <div style={{ margin: "20px" }}></div>
            <div>{generateSeat([28, 29, 30, 31, 32, 33, 34, 35, 36], seatAvailability, modifyAvailability)}</div>
          </div>
          <div style={{ display: "flex" }}>
            <div>{generateSeat([37, 38, 39, 40, 41, 42, 43, 44, 45], seatAvailability, modifyAvailability)}</div>
            <div style={{ margin: "20px" }}></div>
            <div>{generateSeat([46, 47, 48, 49, 50, 51, 52, 53, 54], seatAvailability, modifyAvailability)}</div>
          </div>
          <div style={{ display: "flex" }}>
            <div>{generateSeat([55, 56, 57, 58, 59, 60, 61, 62, 63], seatAvailability, modifyAvailability)}</div>
            <div style={{ margin: "20px" }}></div>
            <div>{generateSeat([64, 65, 66, 67, 68, 69, 70, 71, 72], seatAvailability, modifyAvailability)}</div>
          </div>
          <div style={{ display: "flex" }}>
            <div>{generateSeat([73, 74, 75, 76, 77, 78, 79, 80, 81], seatAvailability, modifyAvailability)}</div>
            <div style={{ margin: "20px" }}></div>
            <div>{generateSeat([82, 83, 84, 85, 86, 87, 88, 89, 90], seatAvailability, modifyAvailability)}</div>
          </div>
          <div style={{ display: "flex" }}>
            <div>{generateSeat([91, 92, 93, 94, 95, 96, 97, 98, 99, 100], seatAvailability, modifyAvailability)}</div>
            <div>{generateSeat([101, 102, 103, 104, 105, 106, 107, 108, 109], seatAvailability, modifyAvailability)}</div>
          </div>
          <div className="pricing">
            <div>
              <div style={{ margin: "10px" }}>Seat Selected : {available.length} x 150</div>
              <div style={{ margin: "10px" }}>Total : {available.length * 150} Rs</div>
            </div>
            <div>
              <button className="proceed-button" onClick={() => setIsBooked(true)}>
                Book
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div style={{ padding: "20px", display: "flex", alignItems: "center" , flexDirection:"column" }}>
            <div className="booked-card">
              <div style={{ padding: "20px" }}>Date : 07 / 11 / 2023</div>
              <div style={{ padding: "20px" }}>Time : 04 : 45 PM</div>
              <div style={{ padding: "20px" }}>Place : PVR , Aura Mall , Bhopal</div>
              <div style={{ background: "white" }}>
                <img width={"100%"} src={"https://static.vecteezy.com/system/resources/previews/017/059/171/original/barcode-sign-free-png.png"} />
              </div>
            </div>
          <button className="proceed-button" onClick={() => router.push("/")}>
            Back To Home
          </button>
          </div>
        </>
      )}
    </div>
  );
}
