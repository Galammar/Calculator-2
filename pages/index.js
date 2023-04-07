import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [calOutput, setCalOutput] = useState('');
  function fixModifiers(modifier) {
    let modifiers = ['+', '-', '*', '/'];
    let x = true;
    for (let i = 0; i < modifiers.length; i++) {
      if (calOutput[calOutput.length - 1] == modifiers[i]) {
        x = false;
      }
    }
    if (x) {
      setCalOutput(calOutput + modifier);
    } else {
      setCalOutput(
        calOutput.toString().substring(0, calOutput.toString().length - 1) +
          '' +
          modifier
      );
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.textbox}>{calOutput}</div>
        <div className={styles.cal1}>
          {/* Nums Div - Start */}
          <div className={styles.numbers}>
            <div>
              <button
                className={styles.pad}
                onClick={() => setCalOutput(calOutput + 1)}
              >
                1
              </button>
              <button
                className={styles.pad}
                onClick={() => setCalOutput(calOutput + 2)}
              >
                2
              </button>
              <button
                className={styles.pad}
                onClick={() => setCalOutput(calOutput + 3)}
              >
                3
              </button>
              <button className={styles.pad} onClick={() => setCalOutput('')}>
                C
              </button>
              <button
                className={styles.pad}
                onClick={() => setCalOutput(calOutput + '.')}
              >
                .
              </button>
            </div>
            <div>
              <button
                className={styles.pad}
                onClick={() => setCalOutput(calOutput + 4)}
              >
                4
              </button>
              <button
                className={styles.pad}
                onClick={() => setCalOutput(calOutput + 5)}
              >
                5
              </button>
              <button
                className={styles.pad}
                onClick={() => setCalOutput(calOutput + 6)}
              >
                6
              </button>
              <button className={styles.pad} onClick={() => fixModifiers('+')}>
                +
              </button>
              <button className={styles.pad} onClick={() => fixModifiers('-')}>
                -
              </button>
            </div>
            <div>
              <button
                className={styles.pad}
                onClick={() => setCalOutput(calOutput + 7)}
              >
                7
              </button>
              <button
                className={styles.pad}
                onClick={() => setCalOutput(calOutput + 8)}
              >
                8
              </button>
              <button
                className={styles.pad}
                onClick={() => setCalOutput(calOutput + 9)}
              >
                9
              </button>
              <button className={styles.pad} onClick={() => fixModifiers('*')}>
                *
              </button>
              <button className={styles.pad} onClick={() => fixModifiers('/')}>
                /
              </button>
            </div>
            <div>
              <button
                className={styles.pad}
                onClick={() => setCalOutput(calOutput + 0)}
              >
                0
              </button>
              <button
                className={styles.pad}
                onClick={() => setCalOutput(calOutput + '.')}
              >
                ,
              </button>
              <button
                className={styles.pad}
                onClick={() =>
                  setCalOutput(calOutput.substr(0, calOutput.length - 1))
                }
              >
                {'<X'}
              </button>
              <button
                className={styles.equals}
                onClick={() => setCalOutput(eval(calOutput))}
              >
                =
              </button>
            </div>
          </div>

          {/* Nums Div - Finish */}
        </div>
      </main>
    </div>
  );
}
