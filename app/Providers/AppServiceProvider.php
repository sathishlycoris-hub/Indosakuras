<?php

namespace App\Providers;

use Inertia\Inertia;
use Illuminate\Support\ServiceProvider;
use App\Models\Service;
use App\Models\Solution;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Inertia::share([
            'flash' => fn() => [
                'success' => session('success'),
                'error' => session('error'),
            ],

            //  GLOBAL service navigation
            'serviceNav' => fn() => Service::select('title', 'slug')
                ->orderBy('id')
                ->get(),

            'footerServices' => fn() =>
            Service::select('title', 'slug')->orderBy('slug')->get(),

            'footerSolutions' => fn() =>
            Solution::select('title', 'slug')->orderBy('slug')->get(),
        ]);
    }
}
