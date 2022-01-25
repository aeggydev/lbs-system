interface Props {
  link: string;
}
export default function FacebookIcon(props: Props) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        className="max-h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.8144 9.54371V11.3223H10.5124V13.4962H11.8144V19.9584H14.4907V13.4962H16.2861C16.2861 13.4962 16.4553 12.4538 16.5367 11.3133H14.5011V9.82787C14.5011 9.60441 14.793 9.30604 15.0823 9.30604H16.5393V7.04175H14.5566C11.7485 7.04175 11.8144 9.21821 11.8144 9.54371Z"
          fill="#594AFC"
        />
        <path
          d="M5.74998 3.16659C5.06484 3.16659 4.40776 3.43876 3.92329 3.92323C3.43882 4.4077 3.16665 5.06478 3.16665 5.74992V21.2499C3.16665 21.9351 3.43882 22.5921 3.92329 23.0766C4.40776 23.5611 5.06484 23.8333 5.74998 23.8333H21.25C21.9351 23.8333 22.5922 23.5611 23.0767 23.0766C23.5611 22.5921 23.8333 21.9351 23.8333 21.2499V5.74992C23.8333 5.06478 23.5611 4.4077 23.0767 3.92323C22.5922 3.43876 21.9351 3.16659 21.25 3.16659H5.74998ZM5.74998 0.583252H21.25C22.6203 0.583252 23.9344 1.1276 24.9034 2.09653C25.8723 3.06547 26.4166 4.37963 26.4166 5.74992V21.2499C26.4166 22.6202 25.8723 23.9344 24.9034 24.9033C23.9344 25.8722 22.6203 26.4166 21.25 26.4166H5.74998C4.37969 26.4166 3.06553 25.8722 2.09659 24.9033C1.12766 23.9344 0.583313 22.6202 0.583313 21.2499V5.74992C0.583313 4.37963 1.12766 3.06547 2.09659 2.09653C3.06553 1.1276 4.37969 0.583252 5.74998 0.583252V0.583252Z"
          fill="#594AFC"
        />
      </svg>
    </a>
  );
}