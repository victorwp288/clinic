;<div class="flex h-screen w-screen justify-center bg-gray-100">
  <div class="mr-8">
    <h1 class="mx-auto max-w-xl pb-4 pt-10 font-medium">Smooth Accordion</h1>
    <div
      class="mx-auto max-w-xl border border-gray-200 bg-white"
      x-data="{ selected: 1 }"
    >
      <ul class="shadow-box">
        <li class="relative border-b border-gray-200">
          <button
            type="button"
            class="w-full px-8 py-6 text-left"
            onClick="selected !== 1 ? selected = 1 : selected = null"
          >
            <div class="flex items-center justify-between">
              <span>Should I use reCAPTCHA v2 or v3?</span>
              <span class="ico-plus"></span>{' '}
            </div>
          </button>
          <div
            class="relative max-h-0 overflow-hidden transition-all duration-700"
            style=""
            x-ref="container1"
            x-bind:style="selected === 1 ? 'max-height: ' + $refs.container1.scrollHeight + 'px' : ''"
          >
            <div class="p-6">
              <p>
                reCAPTCHA v2 is here to stay! We will continue to fully support
                and improve its security and usability.
              </p>
              <p>
                reCAPTCHA v3 is designed for advanced users who want more
                traffic data and for situations where user challenges are
                inappropriate.
              </p>
              <p>
                For instance, a registration page might use reCAPTCHA v2 for a
                stricter check, while frequent actions like sign-in, searches,
                comments, or voting could leverage reCAPTCHA v3. Refer to the
                reCAPTCHA v3 developer guide for more details.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
