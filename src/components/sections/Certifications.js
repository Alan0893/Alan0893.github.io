import React from 'react';
import {
  Spacing,
  Container,
  DivStyles,
  Subhead,
  Info,
  SectionH3,
  H3Container,
  H3Span,
  LinkSvg,
  InfoP,
  ChipWrapper,
  Chip
} from '../../styles/styles';

const Certifications = () => {
  return (
	  <div>
      <ol>

        <li className={Spacing}>
          <div className={Container}>
            <div className={DivStyles} />
            <header className={Subhead}>
              Issued May 2023
            </header>
            <div className={Info}>
              <h3 className={SectionH3}>
                <div>
                  <a className={H3Container} href='https://learndigital.withgoogle.com/digitalgarage/validate-certificate-code' target='_blank' rel='noreferrer'>
                    <span className={H3Span} />
                    <span>
                      <img
                        className='mr-2 h-6 w-6 inline'
                        src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg'
                        alt='Google'
                      />
                      Fundamentals of Digital Marketing
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className={LinkSvg}>
                        <path fillRule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clipRule='evenodd' />
                      </svg>
                    </span>
                  </a>
                </div>
                <div className='text-slate-500'>Google Digital Garage (Discontinued)</div>
              </h3>
              <p className={InfoP}>
                <b>Credential ID:</b> WZW TM2 Q94
              </p>
              <ul className={ChipWrapper}>
                <li className='mr-1.5 mt-2'>
                  <div className={Chip}>Marketing</div>
                </li>
                <li className='mr-1.5 mt-2'>
                  <div className={Chip}>SEO</div>
                </li>
                <li className='mr-1.5 mt-2'>
                  <div className={Chip}>Web Analytics</div>
                </li>
              </ul>
            </div>
          </div>
        </li>

      </ol>
    </div>
  )
}

export default Certifications;