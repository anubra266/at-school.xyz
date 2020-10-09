@component('mail::message')
<h1>Welcome to at-School</h1>

Hey **{{$name}}**, {{-- use double space for line break --}}
We're very excited to have you at at-School!

Click below to get started right now
@component('mail::button', ['url' => $link])
Get Started
@endcomponent
Happy Learning,

Abraham and the at-School team.
@endcomponent
