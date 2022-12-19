import Link from 'next/link';
import React from 'react';


const tagLink = (text, tags) => {
    return (
        <>
            {tags.map((tag, i) => {
                const tagRegex = new RegExp(`\\b${tag}\\b`, 'gi');
                const parts = text.split(tagRegex);

                return (
                    <React.Fragment key={i}>
                        {parts.map((part, j) => (
                            <React.Fragment key={j}>
                                {part}
                                {j < parts.length - 1 && (
                                    <Link href={`/tag/${tag.replace(/\s+/g, '-')}`}>{tag}</Link>
                                )}
                            </React.Fragment>
                        ))}
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default tagLink;