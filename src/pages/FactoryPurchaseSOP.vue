<template>
  <div
    class="bg-white shadow-lg rounded-2xl max-w-screen mx-auto p-8 mt-8 border-2 border-[#773090] font-sans"
  >
    <h1 class="mb-6 text-3xl font-bold text-[#773090]">Factory Purchase Request – SOP</h1>
    <ol class="list-decimal pl-6 space-y-3">
      <li>
        <span class="font-semibold">Open the Purchase Request Form</span>
        <ul class="list-disc pl-5 mt-1 text-base text-gray-700">
          <li>Go to the “Factory Purchase Request” page in the ERP.</li>
        </ul>
      </li>
      <li>
        <span class="font-semibold">Company Details</span>
        <ul class="list-disc pl-5 mt-1 text-base text-gray-700">
          <li>Details are auto-filled. No action needed.</li>
        </ul>
      </li>
      <li>
        <span class="font-semibold">Select Project Details</span>
        <ul class="list-disc pl-5 mt-1 text-base text-gray-700">
          <li>Select the project from dropdown and verify the info.</li>
        </ul>
      </li>
      <li>
        <span class="font-semibold">Order Details</span>
        <ul class="list-disc pl-5 mt-1 text-base text-gray-700">
          <li>Check Purchase Request No and Date (auto-filled).</li>
          <li>Enter Your Reference, Payment Mode, and Credit Terms.</li>
        </ul>
      </li>
      <li>
        <span class="font-semibold">Select Supplier</span>
        <ul class="list-disc pl-5 mt-1 text-base text-gray-700">
          <li>Choose supplier from dropdown. Double-check details.</li>
        </ul>
      </li>
      <li>
        <span class="font-semibold">Attach Files</span>
        <ul class="list-disc pl-5 mt-1 text-base text-gray-700">
          <li>Upload relevant files (.xlsx, .xls, .pdf, .jpg, .png). Max 5 files, 10MB each.</li>
        </ul>
      </li>
      <li>
        <span class="font-semibold">Enter Product/Material Details</span>
        <ul class="list-disc pl-5 mt-1 text-base text-gray-700">
          <li>Fill in each row completely. Use “Add Row” if needed.</li>
        </ul>
      </li>
      <li>
        <span class="font-semibold">Check Taxes &amp; Total</span>
        <ul class="list-disc pl-5 mt-1 text-base text-gray-700">
          <li>Review CGST/SGST %, Rounding Off, and Total.</li>
        </ul>
      </li>
      <li><span class="font-semibold">Add Remarks (Optional)</span></li>
      <li>
        <span class="font-semibold">Review &amp; Submit</span>
        <ul class="list-disc pl-5 mt-1 text-base text-gray-700">
          <li>
            Review everything. Click “Submit Purchase Order” or “Urgent Submit &amp; Approve.”
          </li>
        </ul>
      </li>
      <li>
        <span class="font-semibold">After Submission</span>
        <ul class="list-disc pl-5 mt-1 text-base text-gray-700">
          <li>Check email/ERP for confirmation.</li>
        </ul>
      </li>
    </ol>
    <h3 class="mt-8 mb-3 text-xl font-bold text-[#773090]">Quick Checklist</h3>
    <ul class="list-disc pl-6 space-y-1 text-gray-800">
      <li>✔ Project &amp; Supplier selected</li>
      <li>✔ All items complete</li>
      <li>✔ Files uploaded (if required)</li>
      <li>✔ Remarks added</li>
      <li>✔ Reviewed total &amp; tax</li>
      <li>✔ Submission confirmation received</li>
    </ul>
    <div class="mt-8 text-xs text-gray-500 border-t pt-3">
      <div>
        <strong>Note:</strong> For issues, contact
        <span class="text-[#773090] font-semibold">ERP TEAM</span> or
        <span class="font-semibold">IT Department</span>.
      </div>
    </div>
  </div>
</template>
<script setup>
// No script needed unless you want collapsible sections or other interactivity
</script>
