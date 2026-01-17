<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\Admin\SolutionController;
use App\Http\Controllers\Admin\SolutionMasterController;
use App\Http\Controllers\Admin\SolutionDetailController;
use App\Http\Controllers\Admin\NewseventController;
use App\Http\Controllers\Admin\TeamController;
use App\Http\Controllers\Admin\SeminarController;

use App\Http\Controllers\TeamPageController;
use App\Http\Controllers\SeminarPageController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\Admin\ContactController as AdminContactController;
use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\BlogPageController;
use App\Http\Controllers\Admin\JobController;
use App\Http\Controllers\Admin\JobSectionController;
use App\Http\Controllers\JobPageController;
use App\Http\Controllers\JobApplicationController;
use App\Http\Controllers\Admin\JobApplicationController as AdminJobApplicationController;
use App\Http\Controllers\Admin\FaqController;
use App\Http\Controllers\Admin\GreetingController as AdminGreetingController;
use App\Http\Controllers\Admin\PhilosophyController;
use App\Http\Controllers\Admin\ProfileController as AdminProfileController;
use App\Http\Controllers\Admin\HistoryController;
use App\Http\Controllers\Admin\ClientController;
use App\Http\Controllers\Admin\PolicyController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\SeoController;
use App\Http\Controllers\GreetingPageController;
use App\Http\Controllers\PhilosophyPageController;
use App\Http\Controllers\ProfilePageController;
use App\Http\Controllers\HistoryPageController;
use App\Http\Controllers\ClientPageController;
use App\Http\Controllers\PolicyPageController;
use App\Http\Controllers\SolutionPageController;
use App\Http\Controllers\ServicePageController;
use App\Http\Controllers\HomeController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

/* =======================
| Auth / Landing
======================= */

Route::get('/admin', function () {
    return Inertia::render('Auth/Login', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

/* =======================
| Dashboard
======================= */
Route::get('/dashboard', function () {
    return redirect()->route('admin.contacts.index');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/', [HomeController::class, 'index'])->name('home');
/* =======================
| Profile
======================= */
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

/* =======================
| Public Website Pages
======================= */
// Route::get('/', fn() => Inertia::render('Index'))->name('home');

/* Solutions */
// Route::get('/solutions', fn() => Inertia::render('Solutions'));
// Route::get('/solutions/sourcebytes-ai', fn() => Inertia::render('Solutions/SourceBytesAI'));
// Route::get('/solutions/smartsynch-ai', fn() => Inertia::render('Solutions/Smartsynch'));
// Route::get('/solutions/blueprint-ai', fn() => Inertia::render('Solutions/BlueprintAI'));
// Route::get('/solutions/cybersecurity', fn() => Inertia::render('Solutions/Cybersecurity'));
// Route::get('/solutions/brmssolutions', fn() => Inertia::render('Solutions/BRMSSolutions'));

/* Services */
// Route::get('/services', fn() => Inertia::render('Services'));
// Route::get('/services/ai-driven-development', fn() => Inertia::render('Services/Drivendevelopment'));
// Route::get('/services/ai-driven-modernization', fn() => Inertia::render('Services/Drivenmodern'));
// Route::get('/services/enterprise-applications', fn() => Inertia::render('Services/Application'));
// Route::get('/services/custom-software', fn() => Inertia::render('Services/Software'));
// Route::get('/services/infra-managed', fn() => Inertia::render('Services/Inframanage'));

/* Blogs */
// Route::get('/blogs', fn() => Inertia::render('Blogs'));
// Route::get('/blogs/1', fn() => Inertia::render('Blogs/Blog1'));
// Route::get('/blogs/2', fn() => Inertia::render('Blogs/Blog2'));
// Route::get('/blogs/3', fn() => Inertia::render('Blogs/Blog3'));
// Route::get('/blogs/4', fn() => Inertia::render('Blogs/Blog4'));
// Route::get('/blogs/5', fn() => Inertia::render('Blogs/Blog5'));

/* Contact & Utility */
Route::get('/contact', fn() => Inertia::render('Contact'));
Route::get('/sitemap', fn() => Inertia::render('Sitemap'));
Route::get('/usage', fn() => Inertia::render('Usage'));

/* Case Studies */
Route::get('/casestudies', fn() => Inertia::render('Casestudies'));

Route::get('/casestudies/{id}', function ($id) {
    return match ($id) {
        '1' => Inertia::render('Casestudies/Casestudies1'),
        '2' => Inertia::render('Casestudies/Casestudies2'),
        '3' => Inertia::render('Casestudies/Casestudies3'),
        '4' => Inertia::render('Casestudies/Casestudies4'),
        '5' => Inertia::render('Casestudies/Casestudies5'),
        '6' => Inertia::render('Casestudies/Casestudies6'),
        '7' => Inertia::render('Casestudies/Casestudies7'),
        '8' => Inertia::render('Casestudies/Casestudies8'),
        '9' => Inertia::render('Casestudies/Casestudies9'),
        default => abort(404),
    };
});
/* Corporate info */
Route::get('/corporate-info', fn() => Inertia::render('CorporateInfo'));
// Route::get('/corporate/greetings', fn() => Inertia::render('Corporate/Greetings'));
// Route::get('/corporate/philosophy', fn() => Inertia::render('Corporate/Philosophy'));
// Route::get('/corporate/profile', fn() => Inertia::render('Corporate/Profile'));
// Route::get('/corporate/history', fn() => Inertia::render('Corporate/History'));

// Route::get('/corporate/press-release', fn () => Inertia::render('Corporate/Pressrelease'));
// Route::get('/corporate/clients', fn() => Inertia::render('Corporate/Clients'));
// Route::get('/corporate/policy', fn() => Inertia::render('Corporate/Policy'));

/* Recruitment */
Route::get('/recruitment', fn() => Inertia::render('Recruitment'));


Route::get('/cookie-policy', fn() => Inertia::render('CookiePolicy'));
// Route::get('/recruitment/projectmanager', fn() => Inertia::render('Recruitment/Projectmanager'));
// Route::get('/recruitment/financemanager', fn() => Inertia::render('Recruitment/Financemanager'));
// Route::get('/recruitment/data-scientist', fn() => Inertia::render('Recruitment/Datascientist'));
// Route::get('/recruitment/content-writer', fn() => Inertia::render('Recruitment/Contentwriter'));
// Route::get('/recruitment/consultants', fn() => Inertia::render('Recruitment/Consultants'));

// PUBLIC
Route::get('/corporate/press-release', [NewseventController::class, 'pressRelease'])
    ->name('pressrelease');

// Route::get('/newstemp1', fn() => Inertia::render('News/Newstemplate1'));
// Route::get('/newstemp2', fn() => Inertia::render('News/Newstemplate2'));
// Route::get('/newstemp3', fn() => Inertia::render('News/Newstemplate3'));


// PUBLIC detail page
Route::get('/news/{newsevent}', [NewseventController::class, 'show'])
    ->name('news.show');

// PUBLIC Team page
Route::get('/corporate/team', [TeamPageController::class, 'index'])
    ->name('team.page');

// PUBLIC Seminar page
Route::get('services/seminars-index', [SeminarPageController::class, 'index']);
Route::get('/seminars/{seminar}', [SeminarPageController::class, 'show']);

// PUBLIC Contact form submit
Route::post('/contact/save', [ContactController::class, 'store'])
    ->name('contact.store');

Route::get('services/blogs-index', [BlogPageController::class, 'index'])->name('blogs.index');
Route::get('/blogs/{blog}', [BlogPageController::class, 'show'])->name('blogs.show');

Route::get('/recruitment', [JobController::class, 'recruitment'])
    ->name('recruitment');

Route::get('/recruitment/{slug}', [JobPageController::class, 'show'])
    ->name('recruitment.show');

Route::post('/recruitment/{job}/apply', [JobApplicationController::class, 'store'])
    ->name('job.apply');

// Route::get('/', [NewseventController::class, 'home'])->name('home');

Route::get('/corporate/greetings', [GreetingPageController::class, 'index'])
    ->name('corporate.greetings');

Route::get('/corporate/philosophy', [PhilosophyPageController::class, 'index'])
    ->name('corporate.philosophy');

Route::get('/corporate/profile', [ProfilePageController::class, 'index'])
    ->name('corporate.profile');

Route::get('/corporate/history', [HistoryPageController::class, 'index'])
    ->name('corporate.history');

Route::get('/corporate/clients', [ClientPageController::class, 'index'])
    ->name('corporate.clients');

Route::get('corporate/policy', [PolicyPageController::class, 'index'])
    ->name('policy.index');

Route::get('corporate/policy{slug}', [PolicyPageController::class, 'index'])
    ->name('policy.show');

Route::get('/solutions', [SolutionPageController::class, 'index'])
    ->name('solutions.index');

Route::get('/solutions/{slug}', [SolutionPageController::class, 'show'])
    ->name('solutions.show');

Route::get('/services', [ServicePageController::class, 'index'])
    ->name('services.index');

Route::get('/services/{slug}', [ServicePageController::class, 'show'])
    ->name('services.show');

/* =======================
| Admin Panel
======================= */
Route::prefix('admin')
    ->middleware(['auth'])
    ->name('admin.')
    ->group(function () {

        Route::post('newsevent/{newsevent}', [NewseventController::class, 'update'])
            ->name('newsevent.update');
        Route::resource('newsevent', NewseventController::class)
            ->except(['update']);


        // POST for update (FormData + image)
        Route::post('team/{team}', [TeamController::class, 'update'])
            ->name('team.update');

        Route::resource('team', TeamController::class)
            ->except(['update', 'show']);

        // Route::post('seminars/{seminar}', [SeminarController::class, 'update'])
        //     ->name('seminars.update');

        // Route::resource('seminars', SeminarController::class)
        //     ->except(['update']);

        Route::get('contacts', [AdminContactController::class, 'index'])
            ->name('contacts.index');

        Route::get('/contacts/{contact}', [AdminContactController::class, 'show'])
            ->name('contacts.show');

        Route::delete('/contacts/{contact}', [AdminContactController::class, 'destroy'])
            ->name('contacts.destroy');

        Route::resource('seminars', SeminarController::class)->except(['create', 'edit', 'show']);

        Route::resource('blogs', BlogController::class)
            ->except(['create', 'edit', 'show']);

        Route::resource('jobs', JobController::class)
            ->names('jobs');

        /* Admin */

        Route::get('/job-applications', [AdminJobApplicationController::class, 'index'])
            ->name('job-applications.index');

        Route::delete('/job-applications/{jobApplication}', [AdminJobApplicationController::class, 'destroy'])
            ->name('job-applications.destroy');

        Route::resource('faqs', FaqController::class)->names('faqs');

        Route::resource('greetings', AdminGreetingController::class)
            ->only(['index', 'store', 'update', 'destroy'])
            ->names('greetings');



        Route::resource('philosophy', PhilosophyController::class)
            ->only(['index', 'store', 'update', 'destroy'])
            ->names('philosophy');

        Route::resource('profile', AdminProfileController::class)
            ->only(['index', 'store', 'update', 'destroy'])
            ->names('profile');

        Route::resource('history', HistoryController::class)
            ->only(['index', 'store', 'update', 'destroy'])
            ->names('history');

        Route::resource('clients', ClientController::class)
            ->only(['index', 'store', 'update', 'destroy'])
            ->names('clients');

        Route::resource('policy', PolicyController::class)
            ->only(['index', 'store', 'update', 'destroy'])
            ->names('policy');

        Route::resource('solutions', SolutionController::class)
            ->names('solutions');

        Route::resource('services', ServiceController::class)
            ->names('services');


        Route::get('service-industries', [
            \App\Http\Controllers\Admin\ServiceIndustryController::class,
            'index'
        ])->name('service-industries.index');

        Route::post('service-industries', [
            \App\Http\Controllers\Admin\ServiceIndustryController::class,
            'store'
        ])->name('service-industries.store');

        Route::put('service-industries/{serviceIndustry}', [
            \App\Http\Controllers\Admin\ServiceIndustryController::class,
            'update'
        ])->name('service-industries.update');

        Route::delete('service-industries/{serviceIndustry}', [
            \App\Http\Controllers\Admin\ServiceIndustryController::class,
            'destroy'
        ])->name('service-industries.destroy');

        Route::get('seo', [SeoController::class, 'index'])->name('seo.index');
        Route::post('seo', [SeoController::class, 'store'])->name('seo.store');
    });

/* =======================
| 404 Fallback
======================= */
Route::fallback(fn() => Inertia::render('NotFound'));

/* =======================
| Auth Routes
======================= */
require __DIR__ . '/auth.php';
