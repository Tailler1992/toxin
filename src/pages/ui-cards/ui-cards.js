import '../../components/library.blocks/material-icons/material-icons';
import searchCard from '../../components/common.blocks/cards/search-card/search-card';
import registrationCard from '../../components/common.blocks/cards/registration-card/registration-card';
import bookingCard from '../../components/common.blocks/cards/booking-card/booking-card';
import roomCard from '../../components/common.blocks/cards/room-card/room-card';

import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

window.addEventListener('DOMContentLoaded', () => {
  searchCard();
  registrationCard();
  bookingCard();
  roomCard();

  const dp = new AirDatepicker('.ui-cards__air', {
    range: true,
    buttons: ['clear', { content: 'Применить' }],
    inline: true,
    multipleDates: 2,
    selectedDates: ['2019.08.19', '2019.08.23'],
    prevHtml: '<span class="material-icons">arrow_back</span>',
    nextHtml: '<span class="material-icons">arrow_forward</span>',
    navTitles: {
      days: 'MMMM yyyy',
    },
    onRenderCell({ date }) {
      if (date.getDate() === 8 && date.getMonth() === 7) {
        return { classes: '-current-' };
      }
    }
  });

  dp.$datepicker.style.display = 'block';
  dp.$datepicker.style.top = 0;
});

import './ui-cards.scss';
