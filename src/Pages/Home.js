import React, { useEffect, useState, useRef } from 'react'
import { Button, Typography } from '../Components/Components'
import "../Components/styles.css"
import { Link } from "react-router-dom";

function Home() {

    const [noHoverCount, setNoHoverCount] = useState(0);
    const [hideNoButton, setHideNoButton] = useState(false);
    //sets the window dimensions
    const getWindowSize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        return {
          width,
          height
        };
      };
      const [windowSize, setWindowSize] = useState(getWindowSize());
      //recalls the button positioning function(handleResize) when hovered
      useEffect(() => {
        function handleResize() {
          setWindowSize(getWindowSize());
        }
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
      // evaluates window height and width
      const { height, width } = windowSize;

      //gets the initial X and Y position of the button 
      const myRef = useRef(null);
      const [rectCoordinates, setRectCoordinates] = useState({ x: null, y: null });

        useEffect(() => {
            if (myRef.current) {
            const rect = myRef.current.getBoundingClientRect();
            setRectCoordinates({ x: rect.x, y: rect.y });
            }
        }, [myRef]);

      const [buttonStyle, setButtonStyle] = useState({
        top: rectCoordinates.x,
        left: rectCoordinates.y,
        position: "inherit",
      });
      // repositions the button
      const handleHover = (e) => {

        setNoHoverCount(noHoverCount + 1);
        // Setting the count after which the the No button will hide
        if (noHoverCount >= 6) {
          setHideNoButton(true);
        }

        const maxHeight = height - 30;
        const maxWidth = width - 100;
        setButtonStyle({
          ...buttonStyle,
          position: "absolute",
          top: Math.floor(Math.random() * maxHeight),
          left: Math.floor(Math.random() * maxWidth)
        });
        e.preventDefault();
      };


  return (
    <div className='hv-100'>
        <div className='flex h-100 justify-content-space-around mobile'>
            <div className='flex flex-column'>
                <Typography>Will you go out with me?</Typography>
                <div className='w-100 flex justify-content-space-around'>
                    <Link to="/confirmation" style={{ textDecoration: 'none', color: 'inherit' }}><Button>Yes</Button></Link>
                    <Button
                        ref={myRef}
                        style={buttonStyle}
                        onMouseEnter={handleHover}
                        onClick={handleHover}
                        disabled={hideNoButton}
                        className={hideNoButton ? 'hide-button' : ''}
                    >
                        No
                    </Button>
                </div>
            </div>
            <div>
                <img className="gif" src="/images/cute-please.gif" alt='Please Cute Bear'/>
            </div>
        </div>
    </div>
  )
}

export default Home