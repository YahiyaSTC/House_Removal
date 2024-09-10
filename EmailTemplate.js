const QuoteMsg = (firstName, SurName, yourEmail, phoneNumber, movingDate, BaseURL) => {
    try {
        return ` 
        <table bgcolor="#e5e5e5" width="100%" border="0" cellpadding="50" cellspacing="0">
        <tr>
          <td align="center">
            <table border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td width="600" bgcolor="#ffffff" style="width: 600px">
                    <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                      <td>
                        <table border="0" cellpadding="15" cellspacing="0">
                          <tr>
                            <td align="center" width="600" style="width: 600px;padding-bottom: 2px">
                              <div style="background-color: #000000; padding: 1rem 0;">
                                <img src='${BaseURL}assets/Images/logo.png' width="150" height="100"
                                  style="padding: 0; height: 100px />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td align="center" width="600" height="100" style="width: 600px;padding: 0"> <br />
                              <img src="${BaseURL}assets/Images/logo.png" width="500" height="1"
                                style="padding: 0;" />
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 0px 50px 0px 50px;width: 600px" width="600">
                        <br />
                        <p style="padding: 0px;font-size: 21px;font-weight: bold;">Great news! 🎉 ${firstName} ${SurName} has confirmed a Quote!
                        </p>
                        <p style="padding: 0px;font-size: 16px;">We've booked a Quote with ${firstName} ${SurName} from Quick Trip Removal.<br/> Email: ${yourEmail}<br/> Phone number: ${phoneNumber}<br/>.</p>
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td align="center" style="width: 600px;padding: 0">
                        <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                          <tr>
                            <td style="width: 600px;text-align: center" align="center" width="600">
                              <img
                                src="https://attachment.nayapay.com:8443/fileUploader/download/UPLOAD_DIRECTORY/EMAILASSETS/line.png"
                                width="500" height="1" style="padding: 0;width: 500px;" />
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="width:600px;padding: 0">
                        <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                          <tr>
                            <td style="width: 50px;text-align: left" align="left" width="50"></td>
                            <td style="width: 550px;text-align: left" align="left" width="550"><br />
                              <p style="font-size: 18px;font-weight: bold;">DETAILS (Get A Quote)</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 600px;padding: 0">
                        <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                          <tr>
                            <td style="width: 50px;text-align: left" align="left" width="50"></td>
                            <td style="padding: 0px;width: 250px;text-align: left" align="left" width="250">
                              <p style="font-size: 16px;">First Name</p>
                            </td>
                            <td style="padding: 0px;width: 250px;text-align: right" align="right" width="250">
                              <p style="font-size: 16px;">${firstName}</p>
                            </td>
                            <td style="width: 50px;text-align: right" align="right" width="50"></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 600px;padding: 0">
                        <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                          <tr>
                            <td style="width: 50px;text-align: left" align="left" width="50"></td>
                            <td style="padding: 0px;width: 250px;text-align: left" align="left" width="250">
                              <p style="font-size: 16px;">Sur Name</p>
                            </td>
                            <td style="padding: 0px;width: 250px;text-align: right" align="right" width="250">
                              <p style="font-size: 16px;">${SurName}</p>
                            </td>
                            <td style="width: 50px;text-align: right" align="right" width="50"></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                    <td style="width: 600px;padding: 0">
                      <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                        <tr>
                          <td style="width: 50px;text-align: left" align="left" width="50"></td>
                          <td style="padding: 0px;width: 250px;text-align: left" align="left" width="250">
                            <p style="font-size: 16px;">Email</p>
                          </td>
                          <td style="padding: 0px;width: 250px;text-align: right" align="right" width="250">
                            <p  style="font-size: 16px;">${yourEmail}</p>
                          </td>
                          <td style="width: 50px;text-align: right" align="right" width="50"></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                  <td style="width: 600px;padding: 0">
                    <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                      <tr>
                        <td style="width: 50px;text-align: left" align="left" width="50"></td>
                        <td style="padding: 0px;width: 250px;text-align: left" align="left" width="250">
                          <p style="font-size: 16px;">Phone Number</p>
                        </td>
                        <td style="padding: 0px;width: 250px;text-align: right" align="right" width="250">
                          <p style="font-size: 16px;">${phoneNumber}</p>
                        </td>
                        <td style="width: 50px;text-align: right" align="right" width="50"></td>
                      </tr>
                    </table>
                  </td>
                 </tr>
                 <tr>
                 <td style="width: 600px;padding: 0">
                  <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                    <tr>
                      <td style="width: 50px;text-align: left" align="left" width="50"></td>
                      <td style="padding: 0px;width: 250px;text-align: left" align="left" width="250">
                        <p style="font-size: 16px;">Date Of Move</p>
                      </td>
                      <td style="padding: 0px;width: 250px;text-align: right" align="right" width="250">
                        <p style="font-size: 16px;">${movingDate}</p>
                      </td>
                      <td style="width: 50px;text-align: right" align="right" width="50"></td>
                    </tr>
                  </table>
                    </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `;
    } catch (err) { }
}

const ContactMsg = (firstName, lastName, yourEmail, phoneNumber, yourMessage, BaseURL) => {
    try {
        return ` 
        <table bgcolor="#e5e5e5" width="100%" border="0" cellpadding="50" cellspacing="0">
        <tr>
          <td align="center">
            <table border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td width="600" bgcolor="#ffffff" style="width: 600px">
                    <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                      <td>
                        <table border="0" cellpadding="15" cellspacing="0">
                          <tr>
                            <td align="center" width="600" style="width: 600px;padding-bottom: 2px">
                              <div style="background-color: #000000; padding: 1rem 0;">
                                <img src='${BaseURL}assets/Images/logo.png' width="150" height="100"
                                  style="padding: 0" />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td align="center" width="600" height="1" style="width: 600px;padding: 0"> <br />
                              <img src="${BaseURL}assets/Images/logo.png" width="500" height="1"
                                style="padding: 0;" />
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="width:600px;padding: 0">
                        <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                          <tr>
                            <td style="width: 50px;text-align: left" align="left" width="50"></td>
                            <td style="width: 550px;text-align: left" align="left" width="550"><br />
                              <p style="font-size: 18px;font-weight: bold;">DETAILS (Contact Form)</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 600px;padding: 0">
                        <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                          <tr>
                            <td style="width: 50px;text-align: left" align="left" width="50"></td>
                            <td style="padding: 0px;width: 250px;text-align: left" align="left" width="250">
                              <p style="font-size: 16px;">First Name</p>
                            </td>
                            <td style="padding: 0px;width: 250px;text-align: right" align="right" width="250">
                              <p style="font-size: 16px;">${firstName}</p>
                            </td>
                            <td style="width: 50px;text-align: right" align="right" width="50"></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 600px;padding: 0">
                        <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                          <tr>
                            <td style="width: 50px;text-align: left" align="left" width="50"></td>
                            <td style="padding: 0px;width: 250px;text-align: left" align="left" width="250">
                              <p style="font-size: 16px;">Last Name</p>
                            </td>
                            <td style="padding: 0px;width: 250px;text-align: right" align="right" width="250">
                              <p style="font-size: 16px;">${lastName}</p>
                            </td>
                            <td style="width: 50px;text-align: right" align="right" width="50"></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                    <td style="width: 600px;padding: 0">
                      <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                        <tr>
                          <td style="width: 50px;text-align: left" align="left" width="50"></td>
                          <td style="padding: 0px;width: 250px;text-align: left" align="left" width="250">
                            <p style="font-size: 16px;">Email</p>
                          </td>
                          <td style="padding: 0px;width: 250px;text-align: right" align="right" width="250">
                            <p  style="font-size: 16px;">${yourEmail}</p>
                          </td>
                          <td style="width: 50px;text-align: right" align="right" width="50"></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                  <td style="width: 600px;padding: 0">
                    <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                      <tr>
                        <td style="width: 50px;text-align: left" align="left" width="50"></td>
                        <td style="padding: 0px;width: 250px;text-align: left" align="left" width="250">
                          <p style="font-size: 16px;">Phone Number</p>
                        </td>
                        <td style="padding: 0px;width: 250px;text-align: right" align="right" width="250">
                          <p style="font-size: 16px;">${phoneNumber}</p>
                        </td>
                        <td style="width: 50px;text-align: right" align="right" width="50"></td>
                      </tr>
                    </table>
                  </td>
                 </tr>
                 <tr>
                 <td style="width: 600px;padding: 0">
                  <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                    <tr>
                      <td style="width: 50px;text-align: left" align="left" width="50"></td>
                      <td style="padding: 0px;width: 250px;text-align: left" align="left" width="250">
                        <p style="font-size: 16px;">Message</p>
                      </td>
                      <td style="padding: 0px;width: 250px;text-align: right" align="right" width="250">
                        <p style="font-size: 16px;">${yourMessage}</p>
                      </td>
                      <td style="width: 50px;text-align: right" align="right" width="50"></td>
                    </tr>
                  </table>
                    </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `;
    } catch (err) { }
}

module.exports = { QuoteMsg, ContactMsg }