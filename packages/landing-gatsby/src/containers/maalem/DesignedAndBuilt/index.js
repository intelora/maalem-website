import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './designedAndBuilt.style';

// import Chart from "chart.js";
// import { Pie } from 'react-chartjs-2  '
import './emi.css';
// import 'react-circular-progressbar/dist/styles.css';

// const PrettoSlider = withStyles({
//     root: { color: '#206FB7', height: 10 },
//     thumb: { height: 25, width: 25, backgroundColor: '',current:'rgba(0,0,0,0.03)', border: '3px solid #ccc', color:'#ffff', marginTop: -9, marginLeft: -9 },
//     track: { height: 10, borderRadius: 4 },
//     rail: { height: 10, borderRadius: 4 },
// })(Slider);
import Fade from 'react-reveal/Fade';

const DesignedAndBuilt = (props) => {
  const [pAmount, SetpAmount] = useState(1000);
  const [interest, Setinterset] = useState(10.5);
  const [duration, Setduration] = useState(6);
  //  useEffect(async (props) => {
  //     await this.props.customerLoanDetails()
  //   },[]);
  const maxValue = 1000000;
  const intMAx = 20;
  const maxDuration = 12;

  const intr = interest / 1200;
  const emi = duration
    ? Math.round((pAmount * intr) / (1 - Math.pow(1 / (1 + intr), duration)))
    : 0;

  const totalAmt = duration * emi;
  var TotalAmountofCredit = Math.round(
    (emi / intr) * (1 - Math.pow(1 / (1 + intr), -duration))
  );
  const TotalAmountofInterest = Math.round(totalAmt - TotalAmountofCredit);
  // let loancal=this.props.reducer.loanoverview ? this.props.reducer.loanoverview :[]
  // console.log('emi', emi);
  // console.log('TotalAmountofInterest', TotalAmountofInterest);
  // console.log('totalAmt', totalAmt);
  // console.log(props,'calc lang')
  // console.log(loancal,'loancalget')

  // const [openCalcWrapper, setOpen] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      maalemJson {
        designAndBuilt {
          image {
            publicURL
          }
          title
          slogan
          description
        }
      }
    }
  `);
  const { image, title, slogan, description } = data.maalemJson.designAndBuilt;
  const cmsItems = JSON.parse(window.sessionStorage.getItem('cmsItems'));
  const langIndex = window.sessionStorage.getItem('lang') === 'ar' ? 0 : 1;
  const cmsItems2 = JSON.parse(window.sessionStorage.getItem('cmsItems2'));

  const cmsItemss = cmsItems2[langIndex];
  const [value, setValue] = useState(0);
  //  updateTextInput=(val)=> {
  //   document.getElementById('textInput').value=val;
  // }

  return (
    <SectionWrapper id="loancalculator">
      {/* <Container>
    <img src={CalcIcon} alt="calculator" className="calc-icon" onClick={e=>setOpen(!openCalcWrapper)}/>
  </Container> */}
      <Container id="calcWrapper" className="calcWrapper">
        <button
          className="close-btn"
          onClick={() => {
            document.getElementById('loancalculator').style.transform =
              'translateX(100%)';
          }}
        >
          &times;
        </button>
        <ContentWrapper>
          <div class="row" style={{ display: 'flex' }}>
            <div className="col">
              <div className="content">
              <Heading as="h3" style={{ color:'#d1397c  '}} content={cmsItemss.loancalculator} />
                <Heading content={cmsItemss.loancalculatorheading} />
                <Text content={cmsItemss.loancalculatordescription} />
              </div>
            </div>

          <div className="content">
            <div className="col"> 
              <div className="col-md-3 dfs-loanamtstyle">
                {/* <div className="card">
                  <div className="card-body"> */}
                    <div className="emidetails">
                    {props.lang != 'EN'
                  ? 'Calculate Home Loan EMI'
                  : 'ہوم لون EMI کا حساب لگائیں'}
                    </div>

                    <div className="loanemi">
                      <div className="emicalfontstyle">
                      {props.lang != 'EN' ? 'Loan Amount:' : 'قرضے کی رقم:'}
                      </div>
                      <br></br>
                   
                      <span className="input-group-addon">$</span>
                    
                      <input class="form-control"
                       value= {pAmount} className="loanamount" />
                      <br></br>
                      <div class="slidecontainer">
                   
                      <input
                      class="form-control"
                        type="range"
                        value={pAmount}
                        onChange={(event) => {
                          SetpAmount(event.target.value);
                        }}
                        defaultvalue={pAmount}
                        max={maxValue}
                      />
                      
                    </div>
                    </div>

                    <div className="loanemi">
                      <div className="emicalfontstyle">
                      {props.lang != 'EN' ? 'Interest Rate:' : 'سود کی شرح:'}
                      </div>
                      <br></br>
                      <span className="input-group-addon">%</span>
                      <input  class="form-control" value= {interest} className="loanamount" />
                      <div class="slidecontainer">
                      <input
                       class="form-control"
                        type="range"
                        value={interest}
                        onChange={(event) => {
                          Setinterset(event.target.value);
                        }}
                        defaultvalue={interest}
                        max={intMAx}
                      />
                    </div>
                    </div>

                    <div className="loanemi">
                      <div className="emicalfontstyle">
                      {props.lang != 'EN' ? 'Loan Tenure:' : 'قرض کی مدت:'}
                      </div>
                      <br></br> 
                      {props.lang != 'EN' ? 'month' : 'مہینہ'}
                      <input  class="form-control" value= {duration} className="loanamount" />
                      <div class="slidecontainer">
                      <input
                        type="range"
                        class="form-control"
                        value={duration}
                        onChange={(event) => {
                          Setduration(event.target.value);
                        }}
                        defaultvalue={duration}
                        max={maxDuration}
                        min="1"
                      />
                    </div>
                    </div>
                  {/* </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="content">
            <div className="col">
              <div className="col-md-3 dfs-loanamtstyle">
                <div className="card">
                  <div className="card-body">
                    <div className="emidetails">
                      {props.lang != 'EN'
                        ? 'Your EMI Details'
                        : 'آپ کی EMI کی تفصیلات'}
                    </div>

                    <div className="loanemi">
                      <div className="emicalfontstyle">
                        {props.lang != 'EN' ? 'Loan EMI' : 'لون EMI'}
                      </div>
                      <br></br>
                      <div className="loanamount">${emi}</div>
                    </div>

                    <div className="loanemi">
                      <div className="emicalfontstyle">
                        {props.lang != 'EN'
                          ? 'Total Interest Payable'
                          : 'قابل ادائیگی کل سود'}
                      </div>
                      <div className="loanamount">${TotalAmountofInterest}</div>
                    </div>

                    <div className="loanemi">
                      <div className="emicalfontstyle">
                        {props.lang != 'EN' ? ' Total Payment' : 'کل ادائیگی'}
                      </div>
                      <div className="loanamount">${totalAmt}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default DesignedAndBuilt;
