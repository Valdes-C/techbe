import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    [
      "inline-flex shrink-0 items-center justify-center whitespace-nowrap select-none",
      "rounded-md border border-transparent bg-clip-padding",
      "text-sm font-medium outline-none transition-all",
      "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
      "active:translate-y-px disabled:pointer-events-none disabled:opacity-50",
      "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
      "dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
      // svg defaults
      "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    ].join(" "),
    {
      variants: {
        variant: {
          default: [
            "bg-linear-(--gradient2) text-white font-bold",
            // animacja gradientu + wyraźny hover
            "bg-[length:200%_200%] bg-[position:0%_50%] hover:bg-[position:100%_50%]",
            "hover:brightness-110 hover:saturate-125",
            "hover:shadow-xl hover:shadow-black/25",
            "hover:ring-2 hover:ring-white/25",
            "transition-[background-position,filter,box-shadow,transform] duration-300",
          ].join(" "),
          outline:
              "border-border bg-background shadow-xs hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
          secondary: "bg-secondary font-bold text-white shadow-xs",
          ghost:
              "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
          destructive:
              "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: [
            "px-5 py-4 rounded-lg text-sm min-w-[120px]",
            // styl ikony
            "[&_svg]:size-5! [&&_svg]:mt-0.5 [&&_svg]:bg-white [&&_svg]:ml-3",
            "[&_svg]:stroke-foreground [&&_svg]:rounded-xs",
            // animacja ikony (hover na button -> svg)
            "[&_svg]:transition-transform [&&_svg]:duration-300",
            "hover:[&_svg]:translate-x-0.5 hover:[&_svg]:rotate-180",
          ].join(" "),
          xs: "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
          sm: "h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
          lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
          icon: "size-9",
          "icon-xs":
              "size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
          "icon-sm":
              "size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md",
          "icon-lg": "size-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
);

function Button({
                  className,
                  variant = "default",
                  size = "default",
                  ...props
                }: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
      <ButtonPrimitive
          data-slot="button"
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
      />
  );
}

export { Button, buttonVariants };