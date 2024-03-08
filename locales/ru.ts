import { LocaleType } from './en'

export const ru: LocaleType = {
  aside: {
    logout: 'Выйти',
    payments_list: 'Платежи',
    posts_list: 'Посты',
    statistics: 'Статистика',
    users_list: 'Пользователи',
  },
  common: {
    back_to_last: 'Вернуться назад',
    no: 'Нет',
    search: 'Поиск...',
    yes: 'Да',
  },
  filter: {
    all: 'ВСЕ',
    blocked: 'ЗАБЛОКИРОВАНЫЕ',
    not_blocked: 'НЕ ЗАБЛОКИРОВАНЫЕ',
  },
  header: {
    admin_page: 'Администрирование',
  },
  login: {
    email: 'Почта',
    password: 'Пароль',
    sign_in: 'Войти',
  },
  posts_list: {
    not_posts: 'Странно, но никто еще не написал ни одного поста',
  },
  profile_info: {
    profile_create: 'Дата создания профиля',
    user_id: 'ID пользователя',
  },
  profile_payments: {
    not_payments: 'У пользователя еще нет платежей',
  },
  statistics_page: {
    title: 'Страница статистики',
  },
  table: {
    added: 'Дата добавления',
    amount: 'Количество, $',
    content_followers: 'Контент для подписчиков',
    content_following: 'Контент для Following',
    content_uploaded_files: 'Контент для UploadedFiles',
    followers: 'Подписчики',
    following: 'Следующий',
    payment_date: 'Дата платежа',
    payment_end_date_sub: 'Дата окончания подписки',
    payment_method: 'Способ оплаты',
    payments: 'Платежи',
    payments_list_empty: 'Список платежей пуст',
    profile_link: 'Ссылка на Профиль',
    subscription: 'Подписка',
    uploaded_files: 'Загруженные файлы',
    user_id: 'ID пользователя',
    user_name: 'Имя пользователя',
  },
  test: {
    test_message: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати',
  },
  user_list_popover: {
    ban: 'Заблокировать пользователя',
    ban_advertising: 'Размещение рекламы',
    ban_another: 'Другая причина',
    ban_bad_behavior: 'Плохое поведение',
    ban_question: 'Вы уверены, что заблокировать этого пользователя',
    ban_reason: 'Причина блокировки',
    delete: 'Удалить пользователя',
    delete_question: 'Вы уверены, что хотите удалить пользователя',
    more: 'Больше информации',
    unban: 'Разблокировать пользователя',
    unban_question: 'Вы уверены, что хотите разблокировать пользователя',
  },
  y_documentation: {
    example1: {
      getDescription(name: string, species: string) {
        return `Person ${name} use to the ${species}`
      },
    },
  },
}
