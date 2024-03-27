import { useState } from "react";
import "./App.css";

const EducationLevel = () => {
  const [education, setEducation] = useState("");

  const handleChangeEvent = (event) => {
    setEducation(event.target.value);
  };
  return (
    <div>
      <form onChange={handleChangeEvent}>
        <label>Choose your highest education level: </label>
        <br />
        <input type="radio" value="High School" name="education" />
        High School
        <br />
        <input type="radio" value="Bachelor's " name="education" />
        Bachelor's Degree
        <br />
        <input type="radio" value="Master's " name="education" />
        Master's Degree <br />
        <input type="radio" value="Ph.D" name="education" />
        Ph.D
      </form>
      {education && <p>Education level: I have a {education} degree.</p>}
    </div>
  );
};

const FavMusicGenre = () => {
  const [musicGenre, setMusicGenre] = useState("");

  const handleChangeEvent = (event) => {
    setMusicGenre(event.target.value);
  };
  return (
    <div>
      <form onChange={handleChangeEvent}>
        <label>Choose your favorite music genre:</label>
        <br />
        <input type="radio" value="Pop" name="genre" />
        Pop
        <br />
        <input type="radio" value="Rock" name="genre" />
        Rock
        <br />
        <input type="radio" value="Hip Hop" name="genre" />
        Hip Hop
        <br />
        <input type="radio" value="Classical" name="genre" />
        Classical
        <br />
      </form>
      {musicGenre && <p>I like {musicGenre} music.</p>}
    </div>
  );
};

const PaymenMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleChangeEvent = (event) => {
    setPaymentMethod(event.target.value);
  };
  return (
    <div>
      <form onChange={handleChangeEvent}>
        <label>Select your preferred payment method: </label>
        <br />
        <input type="radio" value="creditcard" name="paayment" />
        Credit Card
        <br />
        <input type="radio" value="paypal" name="paayment" />
        Pay Pal
        <br />
        <input type="radio" value="bitcoin" name="paayment" />
        Bitcoin
        <br />
        <input type="radio" value="cash" name="paayment" />
        Cash
        <br />
      </form>
      <p>Selected payment method: {paymentMethod}</p>
    </div>
  );
};

const Weather = () => {
  const [selectedWeather, setSelectedWeather] = useState("");

  const handleChangeEvent = (event) => {
    setSelectedWeather(event.target.value);
  };

  return (
    <div>
      <form onChange={handleChangeEvent}>
        <label>Choose your preferred weather: </label>
        <br />
        <input type="radio" value="Sunny" name="weather" />
        Sunny
        <br />
        <input type="radio" value="Rainy" name="weather" />
        Rainy
        <br />
        <input type="radio" value="Cloudy" name="weather" />
        Cloudy
        <br />
        <input type="radio" value="Snowy" name="weather" />
        Snowy
        <br />
      </form>
      {selectedWeather && (
        <p>Selected weather: I like {selectedWeather} weather.</p>
      )}
    </div>
  );
};

const Occupation = () => {
  const [selectOccupation, setSelectOccupation] = useState("");

  const handleChangeEvent = (event) => {
    setSelectOccupation(event.target.value);
  };

  return (
    <div>
      <form onChange={handleChangeEvent}>
        <label>Choose your occupation:</label>
        <br />
        <input type="radio" value="student" name="occupation" />
        Student
        <br />
        <input type="radio" value="teacher" name="occupation" />
        Teacher
        <br />
        <input type="radio" value="engineer" name="occupation" />
        Engineer
        <br />
        <input type="radio" value="doctor" name="occupation" />
        Doctor
        <br />
      </form>
      <p>Selected occupation: {selectOccupation}</p>
    </div>
  );
};
export default function App() {
  return (
    <main>
      <EducationLevel />
      <br />
      <FavMusicGenre />
      <br />
      <PaymenMethod />
      <br />
      <Weather />
      <br />
      <Occupation />
    </main>
  );
}
