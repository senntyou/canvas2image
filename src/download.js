
module.exports = data => {
    let link = document.createElement('a');

    link.innerText = 'Canvas to image download link';
    link.setAttribute('download', '');
    link.setAttribute('href', data);
    link.style.display = 'none';

    document.body.appendChild(link);

    let event = document.createEvent('MouseEvents');
    event.initEvent('click', !1, !1);

    link.dispatchEvent(event);

    link.remove();
};
