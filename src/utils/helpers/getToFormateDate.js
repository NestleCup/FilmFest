import dayjs from 'dayjs';
import 'dayjs/locale/ru';
dayjs.locale('ru');


export function getToFormateDate(
  string = 'date',
	format = 'DD/MM/YYYY'
) {
	return dayjs(string).format(format);
}
