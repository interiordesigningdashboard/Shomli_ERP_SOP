<template>
  <div
    class="bg-white shadow-lg rounded-2xl max-w-screen mx-auto p-8 mt-8 border-2 border-[#773090] font-sans"
  >
    <h1 class="text-3xl font-bold mb-6 text-[#773090]">Internal Billing Request – SOP</h1>
    <ol class="list-decimal pl-6 space-y-4 text-gray-800">
      <li>
        <span class="font-semibold">Open the Internal Billing Request Form</span>
        <ul class="list-disc pl-5 mt-1 text-base text-gray-700">
          <li>
            Navigate to
            <span class="font-mono bg-gray-100 px-2 py-0.5 rounded">/InternalBillingRequest</span>
            in the ERP.
          </li>
        </ul>
      </li>
      <li>
        <span class="font-semibold">Select Project Details</span>
        <ul class="list-disc pl-5 mt-1 text-base text-gray-700">
          <li>Choose the project from the dropdown. Address and contact fields are auto-filled.</li>
        </ul>
      </li>
      <li>
        <span class="font-semibold">Fill Quotation Details</span>
        <ul class="list-disc pl-5 mt-1 text-base text-gray-700">
          <li>
            Click <span class="font-mono bg-gray-100 px-2 py-0.5 rounded">+ Add Row</span> to add a
            new billing line.
          </li>
          <li>
            Select Floor, Section, and BOQ No. Fields like Description, BOQ Qty, Unit, and Rate will
            auto-populate.
          </li>
          <li>
            Enter <span class="font-semibold">Mat to be Billed</span> (quantity you want to bill in
            this request).
          </li>
          <li>
            Check that <span class="text-red-600">Mat to be Billed</span> does not exceed available
            quantity.
          </li>
        </ul>
      </li>
      <li>
        <span class="font-semibold">Verify and Enter Taxes</span>
        <ul class="list-disc pl-5 mt-1 text-base text-gray-700">
          <li>Check subtotal and enter CGST and SGST percentages if needed.</li>
          <li>Review the calculated tax and final total.</li>
        </ul>
      </li>
      <li>
        <span class="font-semibold">Add Attachments (if any)</span>
        <ul class="list-disc pl-5 mt-1 text-base text-gray-700">
          <li>Upload supporting documents (Excel, PDF). Max size per file: 10 MB.</li>
        </ul>
      </li>
      <li>
        <span class="font-semibold">Remarks/Instructions</span>
        <ul class="list-disc pl-5 mt-1 text-base text-gray-700">
          <li>Enter any special notes or remarks for Sales/Accounts to review.</li>
        </ul>
      </li>
      <li>
        <span class="font-semibold">Save Draft or Submit</span>
        <ul class="list-disc pl-5 mt-1 text-base text-gray-700">
          <li>
            Click <span class="font-mono bg-gray-100 px-2 py-0.5 rounded">Save Draft</span> to save
            for later editing.
          </li>
          <li>
            Click <span class="font-mono bg-gray-100 px-2 py-0.5 rounded">Submit Request</span> to
            send to the Sales Team.
          </li>
        </ul>
      </li>
      <li>
        <span class="font-semibold">Status Tracking</span>
        <ul class="list-disc pl-5 mt-1 text-base text-gray-700">
          <li>Track your request status (Pending, Approved, Rejected) and view remarks.</li>
        </ul>
      </li>
      <li>
        <span class="font-semibold">Correction/Resubmission</span>
        <ul class="list-disc pl-5 mt-1 text-base text-gray-700">
          <li>If rejected, correct the issues and re-submit with updated information.</li>
        </ul>
      </li>
    </ol>
    <!-- Quicklist Section -->
    <div class="mt-8 pt-6 border-t-2 border-dashed border-[#773090]">
      <h2 class="text-xl font-semibold mb-3 text-[#773090]">Quicklist (Before Submitting IBR)</h2>
      <ul class="list-disc pl-6 space-y-2 text-gray-700">
        <li>Selected the correct project. (Check address and contact details)</li>
        <li>Added all required billing rows with valid Floor, Section, BOQ.</li>
        <li>
          Filled in <span class="font-semibold">Mat to be Billed</span> (cannot exceed available
          quantity).
        </li>
        <li>Checked that auto-calculated fields (Rate, Amount, Taxes) are correct.</li>
        <li>Uploaded supporting documents, if any (Excel, PDF, etc).</li>
        <li>Entered clear remarks/instructions for Sales/Accounts team.</li>
        <li>Reviewed subtotal, taxes, and final amount.</li>
        <!-- <li>Saved as Draft if not ready, or Submitted for approval?</li> -->
      </ul>
      <!-- <div class="text-xs text-gray-500 mt-4">
        <span class="font-semibold">Tip:</span> Use
        <span class="bg-gray-100 px-1 rounded font-mono">Save Draft</span> to avoid data loss if you
        need to come back later!
      </div> -->
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

<script>
export default {
  name: 'IBR_SOP',
}
</script>
