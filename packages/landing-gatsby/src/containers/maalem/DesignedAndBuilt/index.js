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
  const langIndex = window.sessionStorage.getItem('lang') === 'ar' ? 1 : 0;
  const cmsItems2 = JSON.parse(window.sessionStorage.getItem('cmsItems2'));
  const langIndexx = window.sessionStorage.getItem('lang') === 'ar' ? 1 : 0;
  const cmsItemss = cmsItems2[langIndexx];
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
          <div>
            <Container>LOAN CALCULATOR</Container>
            <Container>Calculate & Customize Loan EMI</Container>
            <Container> Calculate Home Loan EMI</Container>
            <div>
              <h3 style={{ color: '#ffff', 'font-weight': 'bold' }}>
                {' '}
                {props.lang != 'EN' ? 'LOAN CALCULATOR' : 'قرض دینے والا'}{' '}
              </h3>
            </div>
            <div className="container emiloancalstyle">
              <div className="row col-md-12">
                <div className="card">
                  <div className="col-md-3 dfs_calculateHeading">
                    {props.lang != 'EN'
                      ? 'Calculate Home Loan EMI'
                      : 'ہوم لون EMI کا حساب لگائیں'}
                  </div>
                  <div className="card-body dfs_calculatorstyle">
                    <div className="row col-md-12">
                      <div className="col-md-3 dfs-loanamtstyle">
                        <div>
                          {/* //c */}
                          <strong gutterBottom>
                            <strong>
                              {props.lang != 'EN'
                                ? 'Loan Amount:'
                                : 'قرضے کی رقم:'}
                            </strong>
                          </strong>
                          <div className="input-group">
                            <span className="input-group-addon">$</span>
                            <input value={pAmount} className="form-control" />
                          </div>
                          {/* PrettoSlider  */}

                          <div class="slidecontainer">
                            <input
                              type="range"
                              value={pAmount}
                              onChange={(event) => {
                                SetpAmount(event.target.value);
                              }}
                              defaultvalue={pAmount}
                              max={maxValue}
                            />
                            {/* <input

                              value={pAmount} 
                              onChange={(event, vAmt) => { SetpAmount(vAmt) }} 
                              defaultvalue={pAmount} 
                              max={maxValue}
                                id="typeinp"
                                type="range"
                                min="0"
                                max="5"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                step="1"
                              /> */}

                            {/* <input type="range" name="rangeInput" min="0" max="100" onChange={updateTextInput(value)}/>
                                          <input type="text" id="textInput" value=""/> */}
                          </div>

                          {/* <div value={pAmount} onChange={(event, vAmt) => { SetpAmount(vAmt) }} defaultvalue={pAmount} max={maxValue} /> */}
                        </div>

                        <div>
                          {/* //c */}
                          <div gutterBottom>
                            <strong>
                              {props.lang != 'EN'
                                ? 'Interest Rate:'
                                : 'سود کی شرح:'}
                            </strong>
                          </div>

                          <div className="input-group">
                            <span className="input-group-addon">%</span>
                            <input value={interest} className="form-control" />
                          </div>

                          {/* PrettoSlider  */}
                          <div class="slidecontainer">
                            <input
                              type="range"
                              value={interest}
                              onChange={(event) => {
                                Setinterset(event.target.value);
                              }}
                              defaultvalue={interest}
                              max={intMAx}
                            />
                            {/* <input
                              type="range"
                              value={interest}
                              onChange={(event, vAmt) => {
                                Setinterset(vAmt);
                              }}
                              defaultvalue={interest}
                              max={intMAx}
                            /> */}
                          </div>
                          {/* <div value={interest} onChange={(event, vAmt) => { Setinterset(vAmt) }} defaultvalue={interest} max={intMAx} /> */}
                        </div>

                        <div>
                          {/* //c */}
                          <div gutterBottom>
                            <strong>
                              {props.lang != 'EN'
                                ? 'Loan Tenure:'
                                : 'قرض کی مدت:'}
                            </strong>
                          </div>
                          <div className="input-group">
                            <span className="input-group-addon">
                              {props.lang != 'EN' ? 'month' : 'مہینہ'}
                            </span>
                            <input value={duration} className="form-control" />
                          </div>
                          {/* PrettoSlider  */}
                          <div class="slidecontainer">
                            <input
                              type="range"
                              value={duration}
                              onChange={(event) => {
                                Setduration(event.target.value);
                              }}
                              defaultvalue={duration}
                              max={maxDuration}
                              min="1"
                            />

                            {/* <input
                              type="range"
                              value={duration}
                              onChange={(event, vAmt) => {
                                Setduration(vAmt);
                              }}
                              defaultvalue={duration}
                              max={maxDuration}
                            /> */}
                          </div>
                          {/* <div value={duration} onChange={(event, vAmt) => { Setduration(vAmt) }} defaultvalue={duration} max={maxDuration} /> */}
                        </div>
                      </div>

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
                              <div className="loanamount">${emi}</div>
                            </div>

                            <div className="loanemi">
                              <div className="emicalfontstyle">
                                {props.lang != 'EN'
                                  ? 'Total Interest Payable'
                                  : 'قابل ادائیگی کل سود'}
                              </div>
                              <div className="loanamount">
                                ${TotalAmountofInterest}
                              </div>
                            </div>

                            <div className="loanemi">
                              <div className="emicalfontstyle">
                                {props.lang != 'EN'
                                  ? ' Total Payment'
                                  : 'کل ادائیگی'}
                              </div>
                              <div className="loanamount">${totalAmt}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3 dfs-loanamtstyle">
                        {/* <div  style={{ width:'100px',height:'100px',background:'black'}} width={100}
                                        height={100}></div> */}

                        {/*                       
                                      <div id="chartContainer" style="height: 370px; width: 100%;"></div> */}
                        {/* <pieChart
                                        data={{
                                            labels: ['Total Interest', 'Total Amount'],
                                            datasets: [{
                                                data: [TotalAmountofInterest,totalAmt],
                                                backgroundColor: ['#919090','#206fb7','#84b0d5','#b6cfe5']
                                            }],
                                           
                                        }}
                                        
                                        width={10}
                                        height={10}
                                       
                                        
                                    /> */}
                        {/* <Pie
                                        data={{
                                            labels: ['Total Interest', 'Total Amount'],
                                            datasets: [{
                                                data: [TotalAmountofInterest,totalAmt],
                                                backgroundColor: ['#919090','#206fb7','#84b0d5','#b6cfe5']
                                            }],
                                           
                                        }}
                                        
                                        width={10}
                                        height={10}
                                        
                                    /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="content">
            <Heading as="h5" content={cmsItemss.loancalculator} />
            <Heading content={cmsItemss.loancalculatorheading} />
            <Text content={cmsItemss.loancalculatordescription} />
          </div>
          <div className="image">
            <Image src={image.publicURL} alt="Built Logo" />
          </div> */}
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default DesignedAndBuilt;
