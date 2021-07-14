import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "../../StyledComponents/routes/RateThisCourse.style";
const RateThisCourse = () => {
const [rate, setRate] = useState(0);
return (
    <div>
        <h1>How would you rate this course?</h1>
        <p><strong>Select Rating</strong></p>
        <Container>
        {
        [...Array(5)].map((item, index) => {
            const givenRating = index + 1;
            return (
            <label>
                <Radio
                type="radio"
                value={givenRating}
                onClick={() => {
                    setRate(givenRating);
                }}
                />
                <Rating>
                <FaStar
                    color={
                    givenRating < rate || givenRating === rate
                        ? "000"
                        : "rgb(192,192,192)"
                    }
                />
                </Rating>
            </label>
            );
        })
        }
        </Container>
    </div>
);
};

export default RateThisCourse;
