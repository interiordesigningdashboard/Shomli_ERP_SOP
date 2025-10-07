<template>
  <div
    class="bg-white shadow-lg rounded-2xl max-w-screen mx-auto p-8 mt-8 border-2 border-[#773090] font-sans"
  >
    <div class="flex items-center gap-4 mb-6">
      <h1 class="text-3xl font-bold text-[#773090]">Site Purchase Request – SOP</h1>
    </div>
    <ol class="list-decimal pl-6 space-y-4 text-base text-gray-800">
      <li>
        <span class="font-semibold">Open the Site Purchase Request Form</span>
        <ul class="list-disc pl-5 mt-1 text-sm text-gray-700">
          <li>Go to the “Site Purchase Request” page in the ERP.</li>
        </ul>
      </li>
      <li>
        <span class="font-semibold">Check Company Details</span>
        <ul class="list-disc pl-5 mt-1 text-sm text-gray-700">
          <li>Company information is auto-filled. Confirm “Invoice To” details.</li>
        </ul>
      </li>
      <li>
        <span class="font-semibold">Fill Project & Site Details</span>
        <ul class="list-disc pl-5 mt-1 text-sm text-gray-700">
          <li>
            Site Name, Address, Contact Person, GSTIN, etc. will auto-populate from SiteIndex.
          </li>
          <li>Verify the site information is correct for this request.</li>
        </ul>
      </li>
      <li>
        <span class="font-semibold">Enter Order Details</span>
        <ul class="list-disc pl-5 mt-1 text-sm text-gray-700">
          <li>Purchase Request Number & Date are auto-filled.</li>
          <li>Enter your Reference, select Payment Mode, and fill Credit Terms.</li>
        </ul>
      </li>
      <li>
        <span class="font-semibold">Choose Supplier</span>
        <ul class="list-disc pl-5 mt-1 text-sm text-gray-700">
          <li>
            Select the supplier from the dropdown. Double-check their address and GST details.
          </li>
        </ul>
      </li>
      <li>
        <span class="font-semibold">Upload Attachments</span>
        <ul class="list-disc pl-5 mt-1 text-sm text-gray-700">
          <li>
            Upload Excel, PDF, or image files (max 5 files, 10MB each). At least one Excel file is
            mandatory.
          </li>
        </ul>
      </li>
      <li>
        <span class="font-semibold">Fill Material List</span>
        <ul class="list-disc pl-5 mt-1 text-sm text-gray-700">
          <li>
            For each item: add description, delivery date, quantity, unit, rate. Amount will
            auto-calculate.
          </li>
          <li>Add/remove rows as needed.</li>
        </ul>
      </li>
      <li>
        <span class="font-semibold">Set Taxes & Review Summary</span>
        <ul class="list-disc pl-5 mt-1 text-sm text-gray-700">
          <li>
            Check and set CGST & SGST rates. Subtotal, taxes, rounding off, and total are calculated
            automatically.
          </li>
        </ul>
      </li>
      <li>
        <span class="font-semibold">Remarks & Submit</span>
        <ul class="list-disc pl-5 mt-1 text-sm text-gray-700">
          <li>Add remarks if needed.</li>
          <li>
            Click <span class="font-semibold text-[#773090]">Submit Purchase Order</span> to send
            for approval.
          </li>
          <li>
            If it is urgent (Porur office only), use
            <span class="font-semibold text-red-600">Submit as Urgent</span>.
          </li>
        </ul>
      </li>
    </ol>

    <!-- Quick Checklist -->
    <div class="mt-8">
      <div class="flex items-center gap-2 mb-3">
        <span
          class="inline-block bg-[#773090] text-white rounded-full px-3 py-1 text-xs font-semibold"
          >Quick Checklist</span
        >
      </div>
      <ul class="list-inside list-disc space-y-2 text-gray-900 text-base">
        <li><span class="font-medium">All required fields are filled</span></li>
        <li><span class="font-medium">Supplier and site details verified</span></li>
        <li><span class="font-medium">At least one Excel file attached</span></li>
        <li><span class="font-medium">Material list matches the requirement</span></li>
        <li><span class="font-medium">Correct taxes applied</span></li>
        <li><span class="font-medium">Remarks entered (if any)</span></li>
        <li><span class="font-medium">Ready for submission & approval</span></li>
      </ul>
    </div>
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
// No script needed; purely presentational SOP page
</script>
