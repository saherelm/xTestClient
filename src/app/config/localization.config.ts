/**
 * this files contains all configurations and declarations about the
 * supported locales and languages and also available string resources
 * inside an xFramework based app.
 */
import { XLocale, XLanguageDescriptor } from 'x-framework-core';

/**
 * specify default locale ...
 */
export const DefaultLocale: XLocale = 'fa-IR';

/**
 * contains all string resources titles which defined in application.
 */
export enum AppResourceIDs {
    //
    // Languages ...
    english = 'english',
    persian = 'persian',
    //
    file = 'file',
    name = 'name',
    type = 'type',
    path = 'path',
    actor = 'actor',
    index = 'index',
    title = 'title',
    thumb = 'thumb',
    document = 'document',
    author_id = 'author_id',
    viewed_on = 'viewed_on',
    check_mail = 'check_mail',
    attached_on = 'attached_on',
    description = 'description',
    uploaded_on = 'uploaded_on',
    default_loading = 'default_loading',
    //
    // Startup ...
    startup_page_title = 'startup_page_title',
    startup_page_description = 'startup_page_description',
    //
    // Landing ...
    landing_page_title = 'landing_page_title',
    landing_page_description = 'landing_page_description',
    //
    // Error ...
    error_page_title = 'error_page_title',
    error_page_description = 'error_page_description',
    //
    // Not Authorized ...
    not_authorized_page_title = 'not_authorized_page_title',
    not_authorized_page_description = 'not_authorized_page_description',
    //
    // Theme Manager ...
    themes = 'themes',
    themes_description = 'themes_description',
    //
    theme_manager = 'theme_manager',
    theme_manager_description = 'theme_manager_description',
}

/**
 * define all available localizations which this client had supports for them ...
 */
export const AvailableTranslationResources: XLanguageDescriptor[] = [
    //
    // Persian ...
    {
        name: 'persian',
        locale: 'fa-IR',
        language: 'fa',
        direction: 'rtl',
        resources: [
            //
            //#region App Resource Ids ...
            //
            // Supported Locales ...
            {
                id: 'english',
                value: 'انگلیسی',
            },
            {
                id: 'persian',
                value: 'فارسی',
            },
            //
            // Components Resources ...
            {
                id: 'file',
                value: 'فایل',
            },
            {
                id: 'name',
                value: 'نام',
            },
            {
                id: 'type',
                value: 'نوع',
            },
            {
                id: 'path',
                value: 'مسیر',
            },
            {
                id: 'actor',
                value: 'بازیگر',
            },
            {
                id: 'index',
                value: 'اندیس',
            },
            {
                id: 'title',
                value: 'عنوان',
            },
            {
                id: 'thumb',
                value: 'پیش نمایش',
            },
            {
                id: 'document',
                value: 'سند',
            },
            {
                id: 'author_id',
                value: 'شناسه ناشر',
            },
            {
                id: 'viewed_on',
                value: 'تاریخ دیدار',
            },
            {
                id: 'check_mail',
                value: 'صندوق پست الکترونیک خود را بررسی کنید',
            },
            {
                id: 'attached_on',
                value: 'تاریخ الصاق',
            },
            {
                id: 'description',
                value: 'توضیحات',
            },
            {
                id: 'uploaded_on',
                value: 'زمان بارگزاری',
            },
            {
                id: 'default_loading',
                value: 'در حال بارگزاری',
            },
            //
            // Startup ...
            {
                id: 'startup_page_title',
                value: 'آغازگر',
            },
            {
                id: 'startup_page_description',
                value: 'آغاز فرآیند بارگزاری سامانه',
            },
            //
            // Landing ...
            {
                id: 'landing_page_title',
                value: 'صفحه نخست',
            },
            {
                id: 'landing_page_description',
                value: 'نخستین صفحه ای که نمایش داده میشود',
            },
            //
            // Error ...
            {
                id: 'error_page_title',
                value: 'خطا',
            },
            {
                id: 'error_page_description',
                value: 'گزارش خطای واقع شده',
            },
            //
            // Not Authorized ...
            {
                id: 'not_authorized_page_title',
                value: 'عدم دسترسی',
            },
            {
                id: 'not_authorized_page_description',
                value: 'جواز دسترسی احراز نشد',
            },
            //
            // Theme Manager ...
            {
                id: 'themes',
                value: 'پوسته ها',
            },
            {
                id: 'themes_description',
                value: 'دسترسی به تمام امکانات مدیریت پوسته ها',
            },
            {
                id: 'theme_manager',
                value: 'مدیریت پوسته',
            },
            {
                id: 'theme_manager_description',
                value: 'مدیریت و دستکاری پوسته های نمایشی برنامه',
            },
            //#endregion

            //
            //#region Default Localization Resource Ids ...
            //
            //#region Commons ...
            {
                id: 'id',
                value: 'شناسه',
            },
            {
                id: 'file_name',
                value: 'نام فایل',
            },

            //
            {
                id: 'error',
                value: 'خطا',
            },
            {
                id: 'required',
                value: 'الزامی است.',
            },

            //
            {
                id: 'loading',
                value: 'بارگزاری',
            },

            //
            {
                id: 'username',
                value: 'نام کاربری',
            },
            {
                id: 'password',
                value: 'کلمه عبور',
            },

            //
            {
                id: 'first_name',
                value: 'نام',
            },
            {
                id: 'last_name',
                value: 'نام خانوادگی',
            },

            //
            {
                id: 'verified',
                value: 'تایید شده',
            },
            {
                id: 'unverified',
                value: 'تایید نشده',
            },

            //
            {
                id: 'thumbnail',
                value: 'پیش نمایش',
            },

            //
            {
                id: 'language',
                value: 'زبان',
            },

            //
            {
                id: 'take_screenshot',
                value: 'تصویر برداری ازمحیط',
            },
            {
                id: 'enable_capture_mode',
                value: 'فعالسازی حالت تصویر برداری',
            },
            {
                id: 'disable_capture_mode',
                value: 'غیرفعالسازی حالت تصویر برداری',
            },
            //#endregion

            //
            //#region File Types ...
            {
                id: 'audio',
                value: 'صوت',
            },
            {
                id: 'video',
                value: 'فیلم',
            },
            {
                id: 'document',
                value: 'سند',
            },
            {
                id: 'cover_image',
                value: 'تصویر',
            },
            {
                id: 'image',
                value: 'تصویر',
            },
            {
                id: 'avatar',
                value: 'تصویر پروفایل',
            },
            {
                id: 'unknown',
                value: 'ناشناس',
            },
            {
                id: 'location',
                value: 'موقعیت جغرافیای',
            },
            //#endregion

            //
            //#region Messages ...
            {
                id: 'are_you_sure',
                value: 'اطمینان دارید ؟',
            },
            {
                id: 'success_msg',
                value: 'عملیات با موفقیت انجام شد',
            },
            {
                id: 'locked_msg',
                value:
                    'برای ترک این صفحه باید فعالیت جاری را لغو کرده و یا به اتمام برسانید',
            },
            {
                id: 'empty_content',
                value: 'خالی است',
            },
            {
                id: 'no_item',
                value: 'محتوایی ثبت نشده است',
            },
            {
                id: 'drag_drop_here',
                value: 'محل رها کردن فایل',
            },
            //#endregion

            //
            //#region Components ...
            {
                id: 'map_dialog_title',
                value: 'نمایش موقعیت مکانی',
            },
            {
                id: 'map_dialog_select_title',
                value: 'انتخاب موقعیت جغرافیایی',
            },
            {
                id: 'color_picker_dialog_title',
                value: 'انتخاب رنگ',
            },
            //#endregion

            //
            //#region Verbs ...
            {
                id: 'dismiss',
                value: 'رد کردن',
            },
            {
                id: 'accept',
                value: 'می پذیرم',
            },
            {
                id: 'ok',
                value: 'بسیار خب',
            },
            {
                id: 'save',
                value: 'ذخیره',
            },
            {
                id: 'cancel',
                value: 'لغو',
            },
            {
                id: 'retry',
                value: 'سعی مجدد',
            },
            {
                id: 'edit',
                value: 'ویرایش',
            },
            {
                id: 'reset',
                value: 'باز نشاندن',
            },
            {
                id: 'change',
                value: 'تغییر',
            },
            {
                id: 'start',
                value: 'آغاز',
            },
            {
                id: 'yes',
                value: 'بله',
            },
            {
                id: 'no',
                value: 'خیر',
            },
            {
                id: 'verify',
                value: 'تایید کردن',
            },
            {
                id: 'confirm',
                value: 'تاییدیه',
            },
            {
                id: 'crop',
                value: 'برش',
            },
            {
                id: 'clear',
                value: 'پاک کردن',
            },
            //
            {
                id: 'set',
                value: 'تنظیم',
            },
            {
                id: 'select',
                value: 'انتخاب',
            },
            {
                id: 'send',
                value: 'ارسال',
            },
            {
                id: 'show',
                value: 'نمایش دادن',
            },
            {
                id: 'hide',
                value: 'پنهان کردن',
            },
            {
                id: 'search',
                value: 'جستجو',
            },
            {
                id: 'delete',
                value: 'حذف',
            },
            {
                id: 'clone',
                value: 'نمونه گیری',
            },
            {
                id: 'select_all',
                value: 'انتخاب همه',
            },
            {
                id: 'select_file',
                value: 'انتخاب فایل(ها)',
            },
            {
                id: 'select_all_group',
                value: 'انتخاب همه موارد فیلتر شده',
            },
            {
                id: 'deselect_all',
                value: 'لغو همه انتخاب ها',
            },
            {
                id: 'deselect_all_group',
                value: 'لغو انتخاب همه موارد فیلتر شده',
            },
            {
                id: 'inverse_selection',
                value: 'انتخاب معکوس',
            },
            //
            {
                id: 'selected_location',
                value: 'انتخاب محل',
            },
            {
                id: 'preset_colors',
                value: 'رنگ های پیش فرض',
            },
            {
                id: 'copy_to_clipboard',
                value: 'ثبت در حافظه موقت',
            },
            {
                id: 'color',
                value: 'رنگ',
            },
            {
                id: 'colors',
                value: 'رنگها',
            },
            {
                id: 'upload',
                value: 'بارگزاری',
            },
            {
                id: 'import',
                value: 'وارد کردن',
            },
            {
                id: 'continue',
                value: 'ادامه',
            },
            {
                id: 'finish',
                value: 'پایان',
            },
            {
                id: 'enable',
                value: 'فعال',
            },
            {
                id: 'disable',
                value: 'غیر فعال',
            },
            {
                id: 'all',
                value: 'همه',
            },
            {
                id: 'new',
                value: 'جدید',
            },
            {
                id: 'add',
                value: 'افزودن',
            },
            {
                id: 'update',
                value: 'بروز رسانی',
            },
            {
                id: 'details',
                value: 'جزئیات',
            },
            {
                id: 'translation',
                value: 'ترجمه',
            },
            {
                id: 'download',
                value: 'دریافت',
            },
            {
                id: 'list',
                value: 'فهرست',
            },
            {
                id: 'options',
                value: 'انتخاب ها',
            },
            {
                id: 'descriptions',
                value: 'توضیحات',
            },

            //
            {
                id: 'type',
                value: 'نوع',
            },
            //
            {
                id: 'media',
                value: 'رسانه',
            },
            {
                id: 'medias',
                value: 'رسانه ها',
            },

            //
            {
                id: 'go',
                value: 'رفتن',
            },
            {
                id: 'input',
                value: 'ورود',
            },
            {
                id: 'preview',
                value: 'پیش نمایش',
            },
            //#endregion

            //
            //#region Pagination ...
            {
                id: 'first',
                value: 'نخستین',
            },
            {
                id: 'last',
                value: 'آخرین',
            },
            {
                id: 'previous',
                value: 'قبلی',
            },
            {
                id: 'next',
                value: 'بعدی',
            },
            {
                id: 'back',
                value: 'بازگشت',
            },
            //#endregion

            //
            //#region Markdown ...
            {
                id: 'x_markdown_preview',
                value: 'پیش نمایش',
            },
            {
                id: 'x_markdown_image',
                value: 'تصویر',
            },
            {
                id: 'x_markdown_link',
                value: 'پیوند',
            },
            {
                id: 'x_markdown_ol',
                value: 'فهرست ترتیبی',
            },
            {
                id: 'x_markdown_ul',
                value: 'فهرست بدون ترتیب',
            },
            {
                id: 'x_markdown_quote',
                value: 'نقل قول',
            },
            {
                id: 'x_markdown_code',
                value: 'کد منبع',
            },
            {
                id: 'x_markdown_heading',
                value: 'عنوان',
            },
            {
                id: 'x_markdown_italic',
                value: 'ایتالیک',
            },
            {
                id: 'x_markdown_bold',
                value: 'پر رنگ',
            },
            {
                id: 'x_markdown_guide',
                value: 'راهنمای نگارش',
            },
            //#endregion

            //
            //#region Theme Related ...
            //
            {
                id: 'theme',
                value: 'پوسته',
            },
            {
                id: 'theme_mode',
                value: 'حالت نمایشی',
            },
            //
            {
                id: 'theme_dark',
                value: 'تیره',
            },
            {
                id: 'theme_light',
                value: 'روشن',
            },
            //
            {
                id: 'theme_name',
                value: 'نام پوسته',
            },
            {
                id: 'theme_name_description',
                value: 'نام پوسته را وارد کنید',
            },
            //
            {
                id: 'theme_clone_title',
                value: 'نمونه گیری از پوسته',
            },
            //#endregion

            //
            //#region Color Picker Related ...
            {
                id: 'input_color_title',
                value: 'تعیین رنگ',
            },
            {
                id: 'input_color_description',
                value: 'مقدار رنگ را وارد کنید',
            },
            //#endregion
            //#endregion

            //
            //#region Default Exception Resource Ids ...
            //
            //#region Invalid Exceptions 1xx ...
            {
                id: 'ex_100',
                value: 'داده نا معتبر',
            },
            {
                id: 'ex_101',
                value: 'تاریخ نامعتبر',
            },
            {
                id: 'ex_102',
                value: 'درخواست اشتباه',
            },
            {
                id: 'ex_103',
                value: 'ورودی نامعتبر',
            },
            {
                id: 'ex_104',
                value: 'پیام نامعتبر',
            },
            {
                id: 'ex_105',
                value: 'نشانه نامعتبر',
            },
            {
                id: 'ex_106',
                value: 'کد اععتبارسنجی نامعتبر',
            },
            {
                id: 'ex_107',
                value: 'پست الکترونیک نامعتبر',
            },
            {
                id: 'ex_108',
                value: 'شماره تلفن همراه نامعتبر',
            },
            {
                id: 'ex_109',
                value: 'کلمه عبور نامعتبر',
            },
            {
                id: 'ex_110',
                value: 'آدرس اینترنتی نامعتبر',
            },
            {
                id: 'ex_111',
                value: 'دستگاه نامعتبر',
            },
            {
                id: 'ex_112',
                value: 'تصویر پروفایل نامعتبر',
            },
            {
                id: 'ex_113',
                value: 'فایل نامعتبر',
            },
            {
                id: 'ex_114',
                value: 'نام کاربری نامعتبر',
            },
            //#endregion

            //
            //#region Not (...) Exceptions 2xx ...
            {
                id: 'ex_200',
                value: 'یافت نشد',
            },
            {
                id: 'ex_201',
                value: 'عدم تایید جواز',
            },
            {
                id: 'ex_202',
                value: 'سطح دسترسی نامعتبر',
            },
            {
                id: 'ex_203',
                value: 'غیر قابل نمایش',
            },
            //#endregion

            //
            //#region User/Registration/Account/Bann Exceptions 3xx ...
            {
                id: 'ex_300',
                value: 'حساب کاربری قفل شده است',
            },
            {
                id: 'ex_301',
                value: 'خطا در ورود',
            },
            {
                id: 'ex_302',
                value: 'کاربر قبلا ثبت نام کرده است',
            },
            {
                id: 'ex_303',
                value: 'کاربر غیرفعال است',
            },
            {
                id: 'ex_304',
                value: 'دستگاه شما قفل شده است تا : (0)',
            },
            {
                id: 'ex_305',
                value: 'امکان درخواست کد اعتبارسنجی وجود ندارد تا : (0)',
            },
            {
                id: 'ex_306',
                value: 'کلمه عبورها یکسان هستند',
            },
            {
                id: 'ex_307',
                value: 'شماره های تلفن یکسان هستند',
            },
            {
                id: 'ex_308',
                value: 'آدرس های پست الکترونیک یکسان هستند',
            },
            {
                id: 'ex_309',
                value: 'شماره تلفن قبلا ثبت شده است',
            },
            {
                id: 'ex_310',
                value: 'پست الکترونیک قبلا ثبت شده است',
            },
            {
                id: 'ex_311',
                value: 'تلفن همراه تایید نشده است',
            },
            {
                id: 'ex_312',
                value: 'پست الکترونیک تایید نشده است',
            },
            {
                id: 'ex_313',
                value: 'مطلب ممنوعه',
            },
            {
                id: 'ex_314',
                value: 'کاربر ممنوعه',
            },
            //#endregion

            //
            //#region General Exceptions 4xx ...
            {
                id: 'ex_400',
                value: 'خطای نا شناخته',
            },
            {
                id: 'ex_401',
                value: 'مورد تکراری',
            },
            {
                id: 'ex_402',
                value: 'شکست عملیات',
            },
            {
                id: 'ex_403',
                value: 'تاریخ مصرف منقضی شده است',
            },
            {
                id: 'ex_404',
                value: 'غیر قابل اسفاده',
            },
            {
                id: 'ex_405',
                value: 'تعداد برچسب ها بیش از جد مجاز است',
            },
            {
                id: 'ex_406',
                value: 'اتمام مهلت زمانی',
            },
            //#endregion

            //
            //#region File Exceptions 5xx ...
            {
                id: 'ex_500',
                value: 'پرونده خالی است',
            },
            {
                id: 'ex_501',
                value: 'اندازه بیش از حد مجاز',
            },
            {
                id: 'ex_502',
                value: 'گونه نامعتبر فایل',
            },
            {
                id: 'ex_503',
                value: 'تعداد رسانه ها بیش از حد مجاز است',
            },
            //#endregion

            //
            //#region Configuration Exceptions 6xx ...
            {
                id: 'ex_600',
                value: 'پیکربندی اشتباه',
            },
            {
                id: 'ex_601',
                value: 'خطا در پیکربندی سامانه ذخیره سازی',
            },
            {
                id: 'ex_602',
                value: 'خطا در پیکربندی سامانه ذخیره سازی',
            },
            //#endregion

            //
            //#region xFramework Exceptions 9xx ...
            {
                id: 'ex_900',
                value: 'تعداد فایل ها بیش از حد مجاز است',
            },
            {
                id: 'ex_901',
                value: 'مجموع اندازه فایل ها کمتر از حد مجاز است',
            },
            {
                id: 'ex_902',
                value: 'مجموع اندازه فایل ها بیش از حد مجاز است',
            },
            {
                id: 'ex_903',
                value: 'شرایط و ضوابط باید پذیرفته شوند',
            },
            {
                id: 'ex_904',
                value: 'عدم پشتیبانی از سیستم موقعیت یاب',
            },
            {
                id: 'ex_905',
                value: 'مجوز دسترسی به موقعیت خود را صادر نکرده اید',
            },
            {
                id: 'ex_906',
                value: 'دسترسی به موقعیت جغرافیایی امکان پذیر نیست',
            },
            {
                id: 'ex_907',
                value: 'عدم پشتیبانی از سیستم ذخیره سازی',
            },
            {
                id: 'ex_908',
                value: 'برای دسترسی به محتوا باید از سامانه خارج شوید',
            },
            {
                id: 'ex_909',
                value: 'زبان انتخاب شده نامعتبر است',
            },
            {
                id: 'ex_910',
                value: 'داده نامعتبر برای انتخاب کاربر',
            },
            //#endregion
            //#endregion
        ],
    },
    //
    // English ...
    {
        name: 'english',
        locale: 'en-US',
        language: 'en',
        direction: 'ltr',
        resources: [
            //
            //#region App Resource Ids ...
            //
            // Supported Locales ...
            {
                id: 'english',
                value: 'English',
            },
            {
                id: 'persian',
                value: 'Persian',
            },
            //
            // Components Resources ...
            {
                id: 'file',
                value: 'File',
            },
            {
                id: 'name',
                value: 'Name',
            },
            {
                id: 'type',
                value: 'Type',
            },
            {
                id: 'path',
                value: 'Path',
            },
            {
                id: 'actor',
                value: 'Actor',
            },
            {
                id: 'index',
                value: 'Index',
            },
            {
                id: 'title',
                value: 'Title',
            },
            {
                id: 'thumb',
                value: 'Thumbnail',
            },
            {
                id: 'document',
                value: 'Document',
            },
            {
                id: 'author_id',
                value: 'Author Id',
            },
            {
                id: 'viewed_on',
                value: 'Viewed On',
            },
            {
                id: 'check_mail',
                value: 'Check your mailbox ...',
            },
            {
                id: 'attached_on',
                value: 'Attached On',
            },
            {
                id: 'descriptions',
                value: 'Description',
            },
            {
                id: 'uploaded_on',
                value: 'Uploaded On',
            },
            {
                id: 'default_loading',
                value: 'Loading',
            },
            //
            // Startup ...
            {
                id: 'startup_page_title',
                value: 'Startup',
            },
            {
                id: 'startup_page_description',
                value: 'Start Loading Application',
            },
            //
            // Landing ...
            {
                id: 'landing_page_title',
                value: 'First Page',
            },
            {
                id: 'landing_page_description',
                value: 'First Page was shown',
            },
            //
            // Error ...
            {
                id: 'error_page_title',
                value: 'Error',
            },
            {
                id: 'error_page_description',
                value: 'Repport Details of happens Error',
            },
            //
            // Not Authorized ...
            {
                id: 'not_authorized_page_title',
                value: 'Unauthorized Access',
            },
            {
                id: 'not_authorized_page_description',
                value: 'required Permissions not found',
            },
            //
            // Theme Manager ...
            {
                id: 'theme',
                value: 'Themes',
            },
            {
                id: 'themes_description',
                value: 'Access All Theme Management tools',
            },
            {
                id: 'theme_manager',
                value: 'Theme Manager',
            },
            {
                id: 'theme_manager_description',
                value: 'add/remove and edit Application Themes',
            },
            //#endregion

            //
            //#region Default Localization Resource Ids ...
            //
            //#region Commons ...
            {
                id: 'id',
                value: 'ID',
            },
            {
                id: 'file_name',
                value: 'File Name',
            },

            //
            {
                id: 'error',
                value: 'Error',
            },
            {
                id: 'required',
                value: 'required',
            },

            //
            {
                id: 'loading',
                value: 'loading',
            },

            //
            {
                id: 'username',
                value: 'Username',
            },
            {
                id: 'password',
                value: 'Password',
            },

            //
            {
                id: 'first_name',
                value: 'Firstname',
            },
            {
                id: 'last_name',
                value: 'Lastname',
            },

            //
            {
                id: 'verified',
                value: 'Verified',
            },
            {
                id: 'unverified',
                value: 'Unverified',
            },

            //
            {
                id: 'thumbnail',
                value: 'Thumbnail',
            },

            //
            {
                id: 'language',
                value: 'Language',
            },

            //
            {
                id: 'take_screenshot',
                value: 'Take Screenshot',
            },
            {
                id: 'enable_capture_mode',
                value: 'Enable Capture Mode',
            },
            {
                id: 'disable_capture_mode',
                value: 'Disable Capture Mode',
            },
            //#endregion

            //
            //#region File Types ...
            {
                id: 'audio',
                value: 'Audio',
            },
            {
                id: 'video',
                value: 'Video',
            },
            {
                id: 'document',
                value: 'Document',
            },
            {
                id: 'cover_image',
                value: 'Cover Image',
            },
            {
                id: 'image',
                value: 'Image',
            },
            {
                id: 'avatar',
                value: 'Avatar',
            },
            {
                id: 'unknown',
                value: 'Unknown',
            },
            {
                id: 'location',
                value: 'Location',
            },
            //#endregion

            //
            //#region Messages ...
            {
                id: 'are_you_sure',
                value: 'Are You Sure ?',
            },
            {
                id: 'success_msg',
                value: 'Operation done Successfully ...',
            },
            {
                id: 'locked_msg',
                value: 'You have to finish/cancel current proccess for leaving',
            },
            {
                id: 'empty_content',
                value: 'Empty',
            },
            {
                id: 'no_item',
                value: 'there is no Content',
            },
            {
                id: 'drag_drop_here',
                value: 'Drop File Here',
            },
            //#endregion

            //
            //#region Components ...
            {
                id: 'map_dialog_title',
                value: 'Show Location',
            },
            {
                id: 'map_dialog_select_title',
                value: 'Select Location',
            },
            {
                id: 'color_picker_dialog_title',
                value: 'Select Color',
            },
            //#endregion

            //
            //#region Verbs ...
            {
                id: 'dismiss',
                value: 'dismiss',
            },
            {
                id: 'accept',
                value: 'Accept',
            },
            {
                id: 'ok',
                value: 'Ok',
            },
            {
                id: 'save',
                value: 'Save',
            },
            {
                id: 'cancel',
                value: 'Cancel',
            },
            {
                id: 'retry',
                value: 'Retry',
            },
            {
                id: 'edit',
                value: 'Edit',
            },
            {
                id: 'reset',
                value: 'Reset',
            },
            {
                id: 'change',
                value: 'Change',
            },
            {
                id: 'start',
                value: 'Start',
            },
            {
                id: 'yes',
                value: 'Yes',
            },
            {
                id: 'no',
                value: 'No',
            },
            {
                id: 'verify',
                value: 'Verify',
            },
            {
                id: 'confirm',
                value: 'Confirm',
            },
            {
                id: 'crop',
                value: 'Crop',
            },
            {
                id: 'clear',
                value: 'Clear',
            },
            //
            {
                id: 'set',
                value: 'Set',
            },
            {
                id: 'select',
                value: 'Select',
            },
            {
                id: 'send',
                value: 'Send',
            },
            {
                id: 'show',
                value: 'Show',
            },
            {
                id: 'hide',
                value: 'Hide',
            },
            {
                id: 'search',
                value: 'Search',
            },
            {
                id: 'delete',
                value: 'Delete',
            },
            {
                id: 'clone',
                value: 'Clone',
            },
            {
                id: 'select_all',
                value: 'Select All',
            },
            {
                id: 'select_file',
                value: 'Select File(s)',
            },
            {
                id: 'select_all_group',
                value: 'Select All Filtered Items',
            },
            {
                id: 'deselect_all',
                value: 'Deselect All',
            },
            {
                id: 'deselect_all_group',
                value: 'Deselect All Filtered Items',
            },
            {
                id: 'inverse_selection',
                value: 'Inverse Selection',
            },
            //
            {
                id: 'selected_location',
                value: 'Selected Location',
            },
            {
                id: 'preset_colors',
                value: 'Preset Colors',
            },
            {
                id: 'copy_to_clipboard',
                value: 'Copy to Clipboard',
            },
            {
                id: 'color',
                value: 'Color',
            },
            {
                id: 'colors',
                value: 'Colors',
            },
            //
            {
                id: 'upload',
                value: 'Upload',
            },
            {
                id: 'import',
                value: 'Import',
            },
            {
                id: 'continue',
                value: 'Continue',
            },
            {
                id: 'finish',
                value: 'Finish',
            },
            {
                id: 'enable',
                value: 'Enable',
            },
            {
                id: 'disable',
                value: 'Disable',
            },
            {
                id: 'all',
                value: 'All',
            },
            {
                id: 'new',
                value: 'New',
            },
            {
                id: 'add',
                value: 'Add',
            },
            {
                id: 'update',
                value: 'Update',
            },
            {
                id: 'details',
                value: 'Details',
            },
            {
                id: 'translation',
                value: 'Translation',
            },
            {
                id: 'download',
                value: 'Download',
            },
            {
                id: 'list',
                value: 'List',
            },
            {
                id: 'options',
                value: 'Options',
            },
            {
                id: 'descriptions',
                value: 'Description',
            },

            //
            {
                id: 'type',
                value: 'Type',
            },
            //
            {
                id: 'media',
                value: 'Media',
            },
            {
                id: 'medias',
                value: 'Medias',
            },

            //
            {
                id: 'go',
                value: 'Go',
            },
            {
                id: 'input',
                value: 'Input',
            },
            {
                id: 'preview',
                value: 'Preview',
            },
            //#endregion

            //
            //#region Pagination ...
            {
                id: 'first',
                value: 'First',
            },
            {
                id: 'last',
                value: 'Last',
            },
            {
                id: 'previous',
                value: 'Previous',
            },
            {
                id: 'next',
                value: 'Next',
            },
            {
                id: 'back',
                value: 'Back',
            },
            //#endregion

            //
            //#region Markdown ...
            {
                id: 'x_markdown_preview',
                value: 'Preview',
            },
            {
                id: 'x_markdown_image',
                value: 'Image',
            },
            {
                id: 'x_markdown_link',
                value: 'Link',
            },
            {
                id: 'x_markdown_ol',
                value: 'Ordered List',
            },
            {
                id: 'x_markdown_ul',
                value: 'Unordered List',
            },
            {
                id: 'x_markdown_quote',
                value: 'Quote',
            },
            {
                id: 'x_markdown_code',
                value: 'Code',
            },
            {
                id: 'x_markdown_heading',
                value: 'Heading',
            },
            {
                id: 'x_markdown_italic',
                value: 'Italic',
            },
            {
                id: 'x_markdown_bold',
                value: 'Bold',
            },
            {
                id: 'x_markdown_guide',
                value: 'Markdown Guide',
            },
            //#endregion

            //
            //#region Theme Related ...
            //
            {
                id: 'theme',
                value: 'Theme',
            },
            {
                id: 'theme_mode',
                value: 'Theme Mode',
            },
            //
            {
                id: 'theme_dark',
                value: 'Dark',
            },
            {
                id: 'theme_light',
                value: 'Light',
            },
            //
            {
                id: 'theme_name',
                value: 'Theme Name',
            },
            {
                id: 'theme_name_description',
                value: 'Enter Theme name',
            },
            //
            {
                id: 'theme_clone_title',
                value: 'Theme Cloning',
            },
            //#endregion

            //
            //#region Color Picker Related ...
            {
                id: 'input_color_title',
                value: 'Color Value',
            },
            {
                id: 'input_color_description',
                value: 'input color value',
            },
            //#endregion
            //#endregion

            //
            //#region Default Exception Resource Ids ...
            //
            //#region Invalid Exceptions 1xx ...
            {
                id: 'ex_100',
                value: 'Invalid Data ...',
            },
            {
                id: 'ex_101',
                value: 'Invalid Date ...',
            },
            {
                id: 'ex_102',
                value: 'Bad Request ...',
            },
            {
                id: 'ex_103',
                value: 'Invalid Args ...',
            },
            {
                id: 'ex_104',
                value: 'Invalid Message ...',
            },
            {
                id: 'ex_105',
                value: 'Invalid Token ...',
            },
            {
                id: 'ex_106',
                value: 'Invalid Verification Code ...',
            },
            {
                id: 'ex_107',
                value: 'Invalid Email Address ...',
            },
            {
                id: 'ex_108',
                value: 'Invalid Mobile Number ...',
            },
            {
                id: 'ex_109',
                value: 'Invalid Password ...',
            },
            {
                id: 'ex_110',
                value: 'Invalid URL ...',
            },
            {
                id: 'ex_111',
                value: 'Invalid Device ...',
            },
            {
                id: 'ex_112',
                value: 'Invalid Profile Image ...',
            },
            {
                id: 'ex_113',
                value: 'Invalid File ...',
            },
            {
                id: 'ex_114',
                value: 'Invalid Username ...',
            },
            //#endregion

            //
            //#region Not (...) Exceptions 2xx ...
            {
                id: 'ex_200',
                value: 'Not Found ...',
            },
            {
                id: 'ex_201',
                value: 'Not Allowed ...',
            },
            {
                id: 'ex_202',
                value: 'Not Authorized ...',
            },
            {
                id: 'ex_203',
                value: 'Not Visible ...',
            },
            //#endregion

            //
            //#region User/Registration/Account/Bann Exceptions 3xx ...
            {
                id: 'ex_300',
                value: 'Account Locked out ...',
            },
            {
                id: 'ex_301',
                value: 'Login Failed ...',
            },
            {
                id: 'ex_302',
                value: 'User Registered Before ...',
            },
            {
                id: 'ex_303',
                value: 'User Disabled ...',
            },
            {
                id: 'ex_304',
                value: 'Device Banned Until:(0)',
            },
            {
                id: 'ex_305',
                value: `You can't Request Verification code Until:(0)`,
            },
            {
                id: 'ex_306',
                value: 'Passwords Same ...',
            },
            {
                id: 'ex_307',
                value: 'Mobiles Same ...',
            },
            {
                id: 'ex_308',
                value: 'Emails Same ...',
            },
            {
                id: 'ex_309',
                value: 'Mobile In Used ...',
            },
            {
                id: 'ex_310',
                value: 'Email In Used ...',
            },
            {
                id: 'ex_311',
                value: 'Mobile Not Confirmed ...',
            },
            {
                id: 'ex_312',
                value: 'Email Not Confirmed ...',
            },
            {
                id: 'ex_313',
                value: 'Post Banned ...',
            },
            {
                id: 'ex_314',
                value: 'User Banned ...',
            },
            //#endregion

            //
            //#region General Exceptions 4xx ...
            {
                id: 'ex_400',
                value: 'Unknown Error ...',
            },
            {
                id: 'ex_401',
                value: 'Duplicate ...',
            },
            {
                id: 'ex_402',
                value: 'Action Failed ...',
            },
            {
                id: 'ex_403',
                value: 'Expired Date ...',
            },
            {
                id: 'ex_404',
                value: 'Unavailable ...',
            },
            {
                id: 'ex_405',
                value: 'Max Allowed Tag Exceeded ...',
            },
            {
                id: 'ex_406',
                value: 'Timeout ...',
            },
            //#endregion

            //
            //#region File Exceptions 5xx ...
            {
                id: 'ex_500',
                value: 'Empty File ...',
            },
            {
                id: 'ex_501',
                value: 'max File size exceeded ...',
            },
            {
                id: 'ex_502',
                value: 'Unsupported File Type ...',
            },
            {
                id: 'ex_503',
                value: 'Max Allowed Media Exceeded ...',
            },
            //#endregion

            //
            //#region Configuration Exceptions 6xx ...
            {
                id: 'ex_600',
                value: 'Invalid Configuration ...',
            },
            {
                id: 'ex_601',
                value: 'Storage Service Initiallization Failed ...',
            },
            {
                id: 'ex_602',
                value: 'Message Service Initialization Failed ...',
            },
            //#endregion

            //
            //#region xFramework Exceptions 9xx ...
            {
                id: 'ex_900',
                value: 'Max Allowed Files Exceeded ...',
            },
            {
                id: 'ex_901',
                value: 'Min Files Size Exceeded ...',
            },
            {
                id: 'ex_902',
                value: 'Max Files Size Exceeded ...',
            },
            {
                id: 'ex_903',
                value: 'Must Accept Terms And Conditions ...',
            },
            {
                id: 'ex_904',
                value: 'Browser does not support Location Services ...',
            },
            {
                id: 'ex_905',
                value: 'You have rejected access to your Location ...',
            },
            {
                id: 'ex_906',
                value: 'Unable to determine your Location ...',
            },
            {
                id: 'ex_907',
                value: 'Browser does not support Storage Services ...',
            },
            {
                id: 'ex_908',
                value: 'Must Logout to access content ...',
            },
            {
                id: 'ex_909',
                value: 'Invalid Locale ...',
            },
            {
                id: 'ex_910',
                value: 'Invalid User Selector ...',
            },
            //#endregion
            //#endregion
        ],
    },
];