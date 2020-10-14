@component('mail::message')
<h1>Welcome to {env('APP_NAME')}</h1>

Hey **{{$name}}**, {{-- use double space for line break --}}
Your {env('APP_NAME')} registration was successful.

We're very excited to have you at {env('APP_NAME')}!

Happy Learning,

Abraham and the at-School team.
@endcomponent
