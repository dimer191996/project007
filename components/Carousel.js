import React, { useState, useEffect, useRef } from 'react'
import ArticleCard2 from './ArticleCard2'

function Carousel({ items = [], interval = 3000 }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [autoPlay, setAutoPlay] = useState(true)
    const itemRef = useRef()
    useEffect(() => {
        let timer
        if (autoPlay) {
            timer = setInterval(() => {
                setCurrentIndex((currentIndex + 1) % items.length)
            }, interval)
        }
        return () => {
            clearInterval(timer)
        }
    }, [autoPlay, currentIndex, interval, items.length])

    useEffect(() => {
        const el = itemRef.current
        el?.style?.transition = 'none'
        el?.style?.opacity = 0
        requestAnimationFrame(() => {
            el?.style.transition = 'all  500ms ease-out'
            el?.style.opacity = 1
        })
    }, [currentIndex])

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex - 1 + items.length) % items.length)
    }

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % items.length)
    }

    const handlePlayPauseClick = () => {
        setAutoPlay(!autoPlay)
    }

    return (
        <div className="carousel relative   items-center justify-center">
            {items.length > 0 && (
                <>
                    <div ref={itemRef} className="carousel-item flex-1 flex items-center justify-center">

                        <ArticleCard2 article={items[currentIndex]} />
                    </div>
                    <div className='mt-3 border-t'>
                        <button onClick={handleNextClick} className=" absolute right-0 top-50  carousel-button carousel-button-next text-2xl font-bold text-gray-600 hover:text-gray-900">
                            Next
                        </button>
                        <button onClick={handlePlayPauseClick} className="carousel-button carousel-button-play-pause text-2xl font-bold text-gray-600 hover:text-gray-900">
                            {autoPlay ? 'Pause' : 'Play'}
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Carousel