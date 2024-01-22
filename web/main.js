const onClick = () => {
  deta = $('form').serializeArray()
  // console.log(deta)
  deta = JSON.stringify(parseJson(deta))
  // console.log(deta)

  var qr = new QRious({
    element: document.getElementById('qrcode'),
    value: deta
  });
}

const parseJson = (form) => {
  var returnJson = {}
  // for (let i = 0; i < form.length; i++) {
  //   returnJson[form[i].name] = form[i].value
  // }
  form.map((data) => returnJson[data.name] = Encoding.convert(data.value, 'SJIS'))
  return returnJson
}