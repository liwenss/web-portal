import React from 'react';

export default function Marker() {
    const styles = {
        lineContainer: {
          display: 'flex',
          flexDirection: 'column', 
          alignItems: 'center',
          position: 'relative',

        } as React.CSSProperties, 
        line: {
          height: '20px',  
          width: '2px',
          backgroundColor: 'rgb(74, 57, 225)',
        } as React.CSSProperties, 
        triangleTop: {
          width: 0,
          height: 0,
          borderLeft: '4px solid transparent',
          borderRight: '4px solid transparent',
          borderBottom: '8px solid rgb(74, 57, 225)', 
          transform: 'rotate(180deg)',
          borderRadius: '2px',
        } as React.CSSProperties,
        triangleBottom: {
          width: 0,
          height: 0,
          borderLeft: '4px solid transparent',
          borderRight: '4px solid transparent',
          borderTop: '8px solid rgb(74, 57, 225)', 
          transform: 'rotate(180deg)',
          borderRadius: '2px',
        } as React.CSSProperties
    };

    return (
        <div style={styles.lineContainer}>
          <div style={styles.triangleTop}></div>
          <div style={styles.line}></div>
          <div style={styles.triangleBottom}></div>
        </div>
    );
}